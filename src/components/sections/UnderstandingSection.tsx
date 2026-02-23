import { Card, CardContent } from '@/components/ui/card';
import { Microscope, Zap, Heart, Droplet, Flower, Pill, Bug, Scale } from 'lucide-react';

export const UnderstandingSection = () => {
  return (
    <section
      id="understanding"
      className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl lg:max-w-6xl mx-auto">
          {/* Årsagen til blærebetændelse */}
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 pb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              Årsag til blærebetændelse
            </h2>
            <p className="text-lg md:text-xl lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2 lg:leading-relaxed">
              Ifølge{' '}
              <a
                href="https://www.sundhed.dk/borger/patienthaandbogen/nyrer-og-urinveje/sygdomme/urinvejsinfektioner/blaerebetaendelse-hos-kvinder-der-ikke-er-gravide/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                sundhed.dk
              </a>{' '}
              skyldes 3 ud af 4 blærebetændelser E. coli-bakterier fra tarmen. Her kan{' '}
              <strong className="text-foreground">vaginal dysbiose</strong> spille en rolle. Det er
              den årsag, som vi vil se nærmere på her.
            </p>
          </div>

          {/* Vaginalflora og Laktobaciller forklaret */}
          <Card className="border-2 border-secondary/20 shadow-lg mb-8 md:mb-12 lg:mb-16">
            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
              {/* Header med ikon */}
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 lg:gap-6 mb-6 md:mb-8">
                <div className="rounded-full bg-secondary/10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center flex-shrink-0">
                  <Microscope className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-secondary" />
                </div>
                <div className="max-w-4xl">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4">
                    Hvorfor får du blærebetændelse?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Der kan være mange grunde til at skadelige bakterier vandrer op i blæren, men
                    nogle gange skyldes det et svækket naturligt forsvar. Hos de fleste
                    menstruerende kvinder dominerer{' '}
                    <strong className="text-foreground">laktobaciller</strong> i skeden. Disse
                    bakterier producerer <strong className="text-foreground">mælkesyre</strong>, som
                    skaber et surt miljø med en sund pH typisk mellem 3.5 og 4.5 (O'Hanlon et al.
                    2013). Det sure miljø hæmmer patogener som E. coli. Særligt D-mælkesyre fra{' '}
                    <em>L. crispatus</em> har stærk beskyttende effekt, mens andre arter som{' '}
                    <em>L. iners</em> giver mindre beskyttelse (Hudson et al. 2020).
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Når laktobacillerne ikke længere dominerer , kaldes det{' '}
                    <strong className="text-foreground">vaginal dysbiose</strong>, en ubalance i
                    vaginalflora med færre laktobaciller og højere pH, hvilket skaber et miljø hvor
                    patogener som E. coli lettere kan trives (Chee et al. 2020; Lev-Sagie et al.
                    2022). Flere faktorer kan påvirke balancen. Et studie af 32 kvinder viste, at
                    både menstruation og sex midlertidigt kan forstyrre den vaginale balance,
                    muligvis fordi blod (pH ~7) og sæd (pH ~7.5) hæver pH, men den præcise årsag er
                    ikke klarlagt (Gajer et al. 2012).
                  </p>
                  <div className="p-3 bg-accent/10 rounded-lg border border-accent/20 flex items-start gap-2">
                    <Flower className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">I overgangsalderen</strong> falder
                      østrogenniveauet, hvilket fører til mindre glycogen i skedens slimhinde.
                      Glycogen er laktobacillernes vigtigste energikilde, så mindre glycogen fører
                      til færre laktobaciller, højere pH og øget risiko for infektioner (Oliveira et
                      al. 2022).
                    </p>
                  </div>
                </div>
              </div>

              {/* Risikofaktorer */}
              <div className="mb-6 md:mb-8 lg:mb-10 max-w-4xl mx-auto">
                <h4 className="text-base md:text-lg lg:text-xl font-semibold mb-1 text-center text-muted-foreground">
                  Fire risikofaktorer
                </h4>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground/70 text-center mb-3 md:mb-4 lg:mb-6">
                  der kan forstyrre balancen og skabe vaginal dysbiose
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
                  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 px-1 py-1.5 sm:px-1.5 sm:py-2 lg:px-2 lg:py-3 rounded-lg bg-primary/5 border border-primary/10 text-center sm:text-left">
                    <div className="rounded-full bg-primary/10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0">
                      <Heart className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-xs sm:text-sm lg:text-base">Sex</p>
                      <p className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground">
                        Sæd har pH ~7.5
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 px-1 py-1.5 sm:px-1.5 sm:py-2 lg:px-2 lg:py-3 rounded-lg bg-secondary/5 border border-secondary/10 text-center sm:text-left">
                    <div className="rounded-full bg-secondary/10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0">
                      <Droplet className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-xs sm:text-sm lg:text-base">Menstruation</p>
                      <p className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground">
                        Blod har pH ~7
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 px-1 py-1.5 sm:px-1.5 sm:py-2 lg:px-2 lg:py-3 rounded-lg bg-accent/5 border border-accent/10 text-center sm:text-left">
                    <div className="rounded-full bg-accent/10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0">
                      <Flower className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-xs sm:text-sm lg:text-base">Overgangsalder</p>
                      <p className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground">
                        Færre laktobaciller
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 px-1 py-1.5 sm:px-1.5 sm:py-2 lg:px-2 lg:py-3 rounded-lg bg-rose-50 dark:bg-rose-900/20 border border-rose-200/30 dark:border-rose-900/20 text-center sm:text-left">
                    <div className="rounded-full bg-rose-100 dark:bg-rose-900/30 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0">
                      <Pill className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-rose-600 dark:text-rose-400" />
                    </div>
                    <div>
                      <p className="font-medium text-xs sm:text-sm lg:text-base">Antibiotika</p>
                      <p className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground">
                        Dræber laktobaciller
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progression: Hvad sker der */}
              <div className="mb-4 md:mb-6 lg:mb-8 max-w-4xl mx-auto">
                <h4 className="text-base md:text-lg lg:text-xl font-semibold mb-3 md:mb-4 lg:mb-6 text-center text-muted-foreground">
                  Vejen fra dysbiose til blærebetændelse
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
                  <div className="relative bg-gradient-to-br from-amber-50/50 to-yellow-50/50 dark:from-amber-950/20 dark:to-yellow-950/20 rounded-lg px-2 py-2 lg:px-3 lg:py-3 border border-amber-200 dark:border-amber-900/30">
                    <div className="rounded-full bg-amber-600/10 w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center mb-3 mx-auto">
                      <Scale className="h-6 w-6 lg:h-7 lg:w-7 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h5 className="font-semibold text-foreground mb-2 text-center lg:text-lg">
                      Dysbiose
                    </h5>
                    <p className="text-sm lg:text-base text-muted-foreground text-center">
                      Færre laktobaciller som producer mælkesyre og stigende pH
                    </p>
                  </div>

                  <div className="relative bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/20 dark:to-amber-950/20 rounded-lg px-2 py-2 lg:px-3 lg:py-3 border border-orange-200 dark:border-orange-900/30">
                    <div className="rounded-full bg-orange-600/10 w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center mb-3 mx-auto">
                      <Bug className="h-6 w-6 lg:h-7 lg:w-7 text-orange-600 dark:text-orange-400" />
                    </div>
                    <h5 className="font-semibold text-foreground mb-2 text-center lg:text-lg">
                      Bakterier trives
                    </h5>
                    <p className="text-sm lg:text-base text-muted-foreground text-center">
                      E. coli og andre patogener kan nu overleve i skeden
                    </p>
                  </div>

                  <div className="relative bg-gradient-to-br from-red-50/50 to-rose-50/50 dark:from-red-950/20 dark:to-rose-950/20 rounded-lg px-2 py-2 lg:px-3 lg:py-3 border border-red-200 dark:border-red-900/30">
                    <div className="rounded-full bg-red-600/10 w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center mb-3 mx-auto">
                      <Zap className="h-6 w-6 lg:h-7 lg:w-7 text-red-600 dark:text-red-400" />
                    </div>
                    <h5 className="font-semibold text-foreground mb-2 text-center lg:text-lg">
                      Blærebetændelse
                    </h5>
                    <p className="text-sm lg:text-base text-muted-foreground text-center">
                      Bakterierne vandrer op gennem urinrøret til blæren
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
