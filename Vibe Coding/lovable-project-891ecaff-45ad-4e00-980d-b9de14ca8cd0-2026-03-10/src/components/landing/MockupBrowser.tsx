const MockupBrowser = () => (
  <div className="mockup-browser bg-card">
    <div className="mockup-browser-bar">
      <div className="flex gap-1.5">
        <div className="mockup-dot bg-destructive/40" />
        <div className="mockup-dot bg-accent/40" />
        <div className="mockup-dot bg-primary/30" />
      </div>
      <div className="flex-1 mx-4 h-6 rounded-md bg-background flex items-center px-3">
        <span className="text-[10px] text-muted-foreground truncate">https://competitor-product.com/checkout</span>
      </div>
    </div>
    {/* Page content mockup */}
    <div className="p-5 space-y-3 min-h-[220px] bg-background relative">
      <div className="h-4 w-3/4 rounded bg-muted" />
      <div className="h-3 w-1/2 rounded bg-muted/70" />
      <div className="grid grid-cols-3 gap-3 pt-2">
        <div className="h-20 rounded-lg bg-muted/50" />
        <div className="h-20 rounded-lg bg-muted/50" />
        <div className="h-20 rounded-lg bg-muted/50" />
      </div>
      <div className="h-3 w-2/3 rounded bg-muted/60" />

      {/* Popup overlay */}
      <div className="absolute top-3 right-3 w-52 card-base p-4 space-y-2.5 border-primary/20 border">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-primary flex items-center justify-center">
            <span className="text-[8px] text-primary-foreground font-bold">CJ</span>
          </div>
          <span className="text-xs font-semibold text-foreground">Capture Step</span>
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] text-muted-foreground font-medium">Step name</label>
          <div className="h-6 rounded-md bg-muted/60 border border-border" />
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] text-muted-foreground font-medium">Pain / Note</label>
          <div className="h-10 rounded-md bg-muted/60 border border-border" />
        </div>
        <div className="h-7 rounded-full bg-primary flex items-center justify-center">
          <span className="text-[10px] text-primary-foreground font-semibold">Save Step</span>
        </div>
      </div>
    </div>
  </div>
);

export default MockupBrowser;
