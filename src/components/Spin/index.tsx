import { VscLoading } from "react-icons/vsc";

export type SpinProps = {
  isLoading?: boolean; // 是否开启Loading 默认开启
  tips?: string; // 提示文字内容
};
export const Spin = ({ isLoading = true, tips }: SpinProps) => {
  const spinAnimationClasses = isLoading ? "animate-spin" : "animate-none";
  const pulseAnimationClasses = isLoading ? "animate-pulse" : "animate-none";
  return (
    <span className="flex flex-row justify-center items-center space-x-2">
      <VscLoading className={spinAnimationClasses} />
      {tips && <span className={pulseAnimationClasses}>{tips}</span>}
    </span>
  );
};
