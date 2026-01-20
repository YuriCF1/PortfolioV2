const StatCard = ({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => {
  return (
    <div
      className="
        rounded-2xl border border-[rgb(var(--foreground)/0.1)]
        bg-[rgb(var(--foreground)/0.05)]
        p-8
        flex flex-col items-center justify-center
        text-center
        transition hover:bg-[rgb(var(--foreground)/0.1)]
      "
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[rgb(var(--foreground)/0.1)] text-[rgb(var(--foreground))] text-xl">
        {icon}
      </div>

      <div className="text-4xl font-semibold text-[rgb(var(--foreground))] mb-2">
        {value}
      </div>

      <div className="text-[rgb(var(--foreground)/0.7)] text-sm">
        {label}
      </div>
    </div>
  );
};

export default StatCard;