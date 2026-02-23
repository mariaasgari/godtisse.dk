import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle, Shield, Heart, Droplet, Flower, CheckCircle2, Pill } from 'lucide-react';

export const PreventionSection = () => {
  return (
    <section
      id="prevention-routines"
      className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl lg:max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 pb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent max-w-3xl mx-auto">
              Gode vaner
            </h2>
            <p className="text-lg md:text-xl lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2 lg:leading-relaxed">
              Supplér mælkesyrebehandlingen med disse enkle forebyggende vaner.
            </p>
          </div>

          {/* ALTID - Generelle gode vaner */}

          <Card className="border-2 border-primary/20 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5 mb-6 md:mb-8 lg:mb-10">
            <CardContent className="p-5 sm:p-8 md:p-12 lg:p-16">
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 lg:gap-6">
                <div className="rounded-full bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-primary" />
                </div>
                <div className="sm:pr-16 lg:pr-20">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-1">Dagligt</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 lg:mb-6">
                    Forebyg blærebetændelse med disse daglige rutiner
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-x-8 md:gap-x-16 lg:gap-x-24">
                    <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                          Sørg for fuld blæretømning hver gang
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                          Undgå at 'holde dig' i længere tid
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                          Tør altid forfra og bagud
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                          Drik masser af vand
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                          pH-balanceret intimsæbe
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                          Vask aldrig inde i skeden (men gerne omkring)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* I HØJRISIKO-PERIODER */}
          <Card className="border-2 border-orange-500/30 bg-gradient-to-br from-orange-50/80 to-amber-50/80 dark:from-orange-950/30 dark:to-amber-950/30 shadow-lg">
            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 lg:gap-6">
                <div className="rounded-full bg-orange-600/10 dark:bg-orange-400/10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="sm:pr-16 lg:pr-20">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-1">
                    Højrisiko perioder
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 lg:mb-6">
                    Når der er risiko for vaginal dysbiose, skal du være ekstra opmærksom:
                  </p>

                  <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm mb-4 justify-center">
                    <span className="inline-flex items-center gap-1 sm:gap-1.5 bg-background/60 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                      <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-orange-600 dark:text-orange-400" />
                      <span className="font-medium">Under og efter sex</span>
                    </span>
                    <span className="inline-flex items-center gap-1 sm:gap-1.5 bg-background/60 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                      <Droplet className="h-3 w-3 sm:h-4 sm:w-4 text-orange-600 dark:text-orange-400" />
                      <span className="font-medium">Under og efter mens</span>
                    </span>
                    <span className="inline-flex items-center gap-1 sm:gap-1.5 bg-background/60 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                      <Flower className="h-3 w-3 sm:h-4 sm:w-4 text-orange-600 dark:text-orange-400" />
                      <span className="font-medium">Vaginal dysbiose i overgangsalderen</span>
                    </span>
                    <span className="inline-flex items-center gap-1 sm:gap-1.5 bg-background/60 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                      <Pill className="h-3 w-3 sm:h-4 sm:w-4 text-orange-600 dark:text-orange-400" />
                      <span className="font-medium">Under og efter antibiotika</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-x-8 md:gap-x-16">
                    <div className="flex flex-col gap-2 sm:gap-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                          Undgå svømmehal, strand og karbad
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                          Undgå G-strengstrusser
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                          Hold dig helt ren i intimområdet
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 sm:gap-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                          pH-balanceret glidecreme under sex
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-xs sm:text-sm lg:text-base">Tis efter sex</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                          Vask intimområdet efter sex
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 py-2 bg-background/50 rounded-lg border border-orange-200 dark:border-orange-900/30 max-w-2xl mx-auto">
                    <p className="text-sm text-muted-foreground italic text-center">
                      💡<strong className="text-foreground">Alle kroppe er forskellige</strong>, og det
                      bedste råd er at prøve sig frem og finde ud af, hvad der virker for dig.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
