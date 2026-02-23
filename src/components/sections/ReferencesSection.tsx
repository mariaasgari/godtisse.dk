import { Card, CardContent } from '@/components/ui/card';
import { FileText, ExternalLink } from 'lucide-react';
import { references } from '@/data/references';

export const ReferencesSection = () => {
  const sortedReferences = [...references].sort((a, b) => a.authors.localeCompare(b.authors, 'da'));

  return (
    <section
      id="references"
      className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl lg:max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16 lg:mb-20">
            <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 pb-2 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent max-w-3xl mx-auto">
              Referencer
            </h2>
          </div>

          <Card className="border-2 border-secondary/20 shadow-lg mb-6 md:mb-8 lg:mb-10 max-w-4xl mx-auto">
            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-6">
              <div className="space-y-4 md:space-y-6 lg:space-y-8 max-w-3xl mx-auto">
                {sortedReferences.map((ref, index) => (
                  <div
                    key={ref.id}
                    className="p-3 sm:p-4 md:p-5 lg:p-6 bg-background/50 rounded-lg border border-secondary/10 hover:border-secondary/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-2 sm:gap-3 lg:gap-4 mb-2 sm:mb-3">
                      <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                        <span className="text-xs sm:text-sm lg:text-base font-bold text-secondary">
                          {index + 1}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0 max-w-2xl">
                        <p className="text-xs sm:text-sm lg:text-base font-semibold text-foreground mb-1 sm:mb-2">
                          {ref.authors} ({ref.year})
                        </p>
                        <p className="text-sm sm:text-base lg:text-lg text-foreground mb-1 sm:mb-2 leading-relaxed lg:leading-loose">
                          {ref.title}
                        </p>
                        <p className="text-xs sm:text-sm lg:text-base text-muted-foreground italic mb-2 sm:mb-3">
                          {ref.journal}, {ref.volume}, {ref.pages}
                        </p>
                        <div className="flex flex-wrap gap-2 sm:gap-4 lg:gap-6 text-xs sm:text-xs lg:text-sm">
                          <span className="text-muted-foreground">
                            <strong className="text-foreground">DOI:</strong> {ref.doi}
                          </span>
                          <span className="text-muted-foreground">
                            <strong className="text-foreground">PMID:</strong> {ref.pmid}
                          </span>
                          <a
                            href={ref.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-secondary hover:text-secondary/80 font-medium transition-colors"
                          >
                            <FileText className="h-3 w-3" />
                            Læs på PubMed
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
