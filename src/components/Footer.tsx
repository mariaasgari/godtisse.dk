export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              godtisse.dk
            </h3>
            <p className="text-muted-foreground">
              Din guide til forebyggelse af tilbagevendende blærebetændelser
            </p>
          </div>

          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Kontakt:{' '}
              <a
                href="mailto:maria.asgari@outlook.dk"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                maria.asgari@outlook.dk
              </a>
            </p>
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} godtisse.dk - Denne hjemmeside er udelukkende til
              informationsformål og erstatter ikke professionel medicinsk rådgivning.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
