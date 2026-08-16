"use client";
import Modal from "@/components/ui/Modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTripSchema, CreateTripType,defaultValues } from "@/features/trips/schema/createTripSchema";
import { fetchWithAuth } from "@/lib/fetchWithAuth";
import { toast } from "sonner"
interface Props {
  onClose: () => void;
}

export default function AddTripModal({ onClose}: Props) {
  const { handleSubmit, register, formState: { errors } } = useForm<CreateTripType>({
    resolver: zodResolver(createTripSchema),
    defaultValues: defaultValues
  });

  const onSubmit = async (data: CreateTripType) => {
    try {
      const response = await fetchWithAuth("/api/v1/trips", {
        method: "POST",
        body: JSON.stringify({
          title: data.title,
          start_date: data.startDate,
          end_date: data.endDate,
          note: data.note,
        }),
      });

      if (!response.ok) {
        throw new Error("旅行の作成に失敗しました");
      }
      toast.success("旅行が作成されました");
      onClose();
    } catch (error) {
      toast.error("旅行の作成に失敗しました");
      console.error("エラー:", error);
    }
  };

  return (
    <Modal onClose={onClose}>
      <div className="flex items-center justify-between mb-1.5">
        <h2 className="text-lg font-bold">新しい旅行を追加</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none">×</button>
      </div>
      <p className="text-[13px] text-gray-500 mb-6">旅行の詳細を入力してください</p>

      <label className="block text-[13px] font-medium text-gray-900 mb-1.5">タイトル</label>
      <input
        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white outline-none focus:border-gray-400 transition-colors"
        {...register("title")}
        placeholder="例：沖縄旅行"
        autoFocus
      />
      {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}

      <div className="flex gap-3 mt-4">
        <div className="flex-1">
          <label className="block text-[13px] font-medium text-gray-900 mb-1.5">開始日</label>
          <input
            type="date"
            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white outline-none focus:border-gray-400 transition-colors"
            {...register("startDate")}
          />
          {errors.startDate && <p className="text-red-500 text-xs mt-1">{errors.startDate.message}</p>}
        </div>
        <div className="flex-1">
          <label className="block text-[13px] font-medium text-gray-900 mb-1.5">終了日</label>
          <input
            type="date"
            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white outline-none focus:border-gray-400 transition-colors"
            {...register("endDate")}
          />
          {errors.endDate && <p className="text-red-500 text-xs mt-1">{errors.endDate.message}</p>}
        </div>
      </div>

      <label className="block text-[13px] font-medium text-gray-900 mb-1.5 mt-4">説明</label>
      <textarea
        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white outline-none focus:border-gray-400 transition-colors resize-y min-h-[80px]"
        {...register("note")}
        placeholder="旅行の概要を入力..."
        rows={3}
      />
      {errors.note && <p className="text-red-500 text-xs mt-1">{errors.note.message}</p>}

      <div className="flex justify-end gap-2.5 mt-6">
        <button onClick={onClose} className="px-5 py-2 rounded-lg border border-gray-200 text-sm hover:bg-gray-50 transition-colors">キャンセル</button>
        <button onClick={handleSubmit(onSubmit)} className="px-5 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors">追加</button>
      </div>
    </Modal>
  );
}
