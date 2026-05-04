interface Props {
  label: string;
  className?: string;
}

export default function ImgPlaceholder({ label, className = "" }: Props) {
  return (
    <div
      className={`flex items-center justify-center bg-[repeating-linear-gradient(135deg,#f0f2f5_0,#f0f2f5_10px,#e8eaed_10px,#e8eaed_20px)] ${className}`}
    >
      <span className="text-[10px] text-gray-400 font-mono text-center p-2 leading-relaxed">
        {label}
      </span>
    </div>
  );
}