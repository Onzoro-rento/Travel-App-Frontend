import { z } from 'zod'

export const createTripSchema = z.object({
    title: z.string().min(1, '旅行の名前は必須です'),
    startDate: z.string().nullable().refine((date) => !isNaN(Date.parse(date || '')), {
        message: '有効な日付を入力してください'
    }),
    endDate: z.string().nullable().refine((date) => !isNaN(Date.parse(date || '')), {
        message: '有効な日付を入力してください'
    }),
    note: z.string().max(200, '説明は200文字以内で入力してください').nullable()
}).refine(
    (data) => {
        if (!data.startDate || !data.endDate) return true;
        return new Date(data.startDate) <= new Date(data.endDate);
    },
    { message: '開始日は終了日より前に設定してください', path: ['endDate'] }
)
export const defaultValues = {
    title: '',
    startDate: null,
    endDate: null,
    note: null
}
type CreateTripType = z.infer<typeof createTripSchema>
export type { CreateTripType }

export default createTripSchema