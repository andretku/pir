import * as React from "react";
import { cn } from "@/lib/utils";

interface SelectContextValue {
  value: string;
  onValueChange: (value: string) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SelectContext = React.createContext<SelectContextValue | undefined>(undefined);

const useSelectContext = () => {
  const context = React.useContext(SelectContext);

  if (!context) {
    throw new Error("Select components must be used within Select");
  }

  return context;
};

interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}

const Select = ({ value, onValueChange, children }: SelectProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <SelectContext.Provider value={{ value, onValueChange, open, onOpenChange: setOpen }}>
      {children}
    </SelectContext.Provider>
  );
};

interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { open, onOpenChange } = useSelectContext();

    return (
      <button
        ref={ref}
        type="button"
        onClick={() => onOpenChange(!open)}
        className={cn(
          "flex h-10 w-full items-center justify-center rounded-md border-none px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);
SelectTrigger.displayName = "SelectTrigger";

interface SelectValueProps {
  placeholder?: string;
}

const SelectValue = ({ placeholder }: SelectValueProps) => {
  const { value } = useSelectContext();

  return <span>{value ? value.toUpperCase() : placeholder}</span>;
};

interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
  ({ className, children, ...props }, ref) => {
    const { open, onOpenChange } = useSelectContext();
    const contentRef = React.useRef<HTMLDivElement>(null);
    const triggerRef = React.useRef<HTMLButtonElement | null>(null);

    React.useImperativeHandle(ref, () => contentRef.current as HTMLDivElement);

    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;
        if (
          contentRef.current &&
          !contentRef.current.contains(target) &&
          triggerRef.current &&
          !triggerRef.current.contains(target)
        ) {
          onOpenChange(false);
        }
      };

      if (open) {
        document.addEventListener("mousedown", handleClickOutside);
        triggerRef.current = document.activeElement as HTMLButtonElement;
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [open, onOpenChange]);

    if (!open) return null;

    return (
      <div
        ref={contentRef}
        className={cn(
          "absolute top-full left-0 mt-1 z-50 min-w-[4rem] rounded-md border bg-popover text-popover-foreground shadow-md",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);
SelectContent.displayName = "SelectContent";

interface SelectItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  children: React.ReactNode;
}

const SelectItem = React.forwardRef<HTMLButtonElement, SelectItemProps>(
  ({ className, value, children, ...props }, ref) => {
    const { onValueChange, onOpenChange } = useSelectContext();

    return (
      <button
        ref={ref}
        type="button"
        onClick={() => {
          onValueChange(value);
          onOpenChange(false);
        }}
        className={cn(
          "relative flex w-full cursor-pointer select-none items-center justify-center rounded-sm py-1.5 px-2 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);
SelectItem.displayName = "SelectItem";

const SelectGroup = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const SelectLabel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("py-1.5 px-2 text-sm font-medium", className)} {...props} />
  ),
);
SelectLabel.displayName = "SelectLabel";

const SelectSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
  ),
);
SelectSeparator.displayName = "SelectSeparator";

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
