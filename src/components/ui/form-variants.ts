import { cn } from "@/lib/utils";

export const formLabelVariants = cn(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

export const formItemVariants = cn(
  "space-y-2"
);

export const formControlVariants = cn(
  "flex w-full flex-col space-y-2"
);

export const formDescriptionVariants = cn(
  "text-sm text-muted-foreground"
);

export const formMessageVariants = cn(
  "text-sm font-medium text-destructive"
);

export const formFieldVariants = cn(
  "space-y-2"
);
