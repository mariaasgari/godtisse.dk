import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Pill, ArrowRight } from 'lucide-react';

export const ViciousCircleSection = () => {
  return (
    <section
      id="circle"
      className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl lg:max-w-6xl mx-auto space-y-10 md:space-y-16">
          <div>
            <div className="text-center mb-10 md:mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 md:mb-6 pb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent max-w-4xl mx-auto">
                Den onde cirkel
              </h2>
              <p className="text-lg md:text-xl lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2 lg:leading-relaxed">
                Antibiotika er vigtigt og virker, det kurerer din blærebetændelse. Men hos nogle
                kvinder kommer infektionen tilbage kort tid efter.
              </p>
            </div>

            <Card className="bg-gradient-to-br from-pink-50/50 to-rose-50/50 dark:from-pink-950/20 dark:to-rose-950/20 border-2 border-pink-200 dark:border-pink-900/30 shadow-lg">
              <CardContent className="p-4 sm:p-6 lg:p-10">
                <div className="text-center mb-4 md:mb-6 lg:mb-8">
                  <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 pb-1 bg-gradient-to-r from-pink-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
                    Støt op under antibiotikakuren
                  </h4>
                  <p className="text-sm text-pink-800 dark:text-pink-200 max-w-2xl mx-auto"></p>
                </div>

                {/* Circular Flow diagram */}
                <div className="relative mb-4 md:mb-6 lg:mb-8 flex justify-center">
                  <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px]">
                    {/* Central circle with arrows showing rotation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-2 border-dashed border-pink-300 dark:border-pink-700 animate-[spin_20s_linear_infinite]"></div>
                    </div>

                    {/* Step 1: Dysbiose - Top */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center text-center group">
                      <div className="bg-gradient-to-br from-pink-100 to-pink-50 dark:from-pink-900/40 dark:to-pink-900/20 rounded-xl w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center mb-1 sm:mb-2 border-2 border-pink-300 dark:border-pink-700 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <span className="text-base sm:text-2xl">⚖️</span>
                      </div>
                      <div className="bg-pink-100/50 dark:bg-pink-900/20 rounded-lg px-1 py-0.5 sm:px-2 sm:py-1.5 border border-pink-200 dark:border-pink-800">
                        <p className="text-[10px] sm:text-xs font-bold text-pink-900 dark:text-pink-100">
                          Dysbiose
                        </p>
                        <p className="text-[8px] sm:text-[10px] text-pink-700 dark:text-pink-300">
                          Ubalance i floraen
                        </p>
                      </div>
                      {/* Arrow pointing right */}
                      <ArrowRight className="absolute -right-5 sm:-right-8 top-4 sm:top-6 h-3 w-3 sm:h-5 sm:w-5 text-pink-500 dark:text-pink-400 rotate-45" />
                    </div>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center text-center group">
                      <div className="bg-gradient-to-br from-rose-100 to-rose-50 dark:from-rose-900/40 dark:to-rose-900/20 rounded-xl w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center mb-1 sm:mb-2 border-2 border-rose-300 dark:border-rose-700 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <span className="text-base sm:text-2xl">📈</span>
                      </div>
                      <div className="bg-rose-100/50 dark:bg-rose-900/20 rounded-lg px-1 py-0.5 sm:px-4 sm:py-1.5 border border-rose-200 dark:border-rose-800 whitespace-nowrap">
                        <p className="text-[10px] sm:text-xs font-bold text-pink-900 dark:text-pink-100">
                          pH stiger
                        </p>
                        <p className="text-[8px] sm:text-[10px] text-pink-700 dark:text-pink-300">Mindre surt</p>
                      </div>
                      {/* Arrow pointing down */}
                      <ArrowRight className="absolute -bottom-5 sm:-bottom-8 left-4 sm:left-6 h-3 w-3 sm:h-5 sm:w-5 text-rose-500 dark:text-rose-400 rotate-[135deg]" />
                    </div>

                    {/* Step 3: Bakterier vokser - Bottom */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center text-center group">
                      <div className="bg-gradient-to-br from-fuchsia-100 to-fuchsia-50 dark:from-fuchsia-900/40 dark:to-fuchsia-900/20 rounded-xl w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center mb-1 sm:mb-2 border-2 border-fuchsia-300 dark:border-fuchsia-700 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <span className="text-base sm:text-2xl">🦠</span>
                      </div>
                      <div className="bg-fuchsia-100/50 dark:bg-fuchsia-900/20 rounded-lg px-1 py-0.5 sm:px-2 sm:py-1.5 border border-fuchsia-200 dark:border-fuchsia-800 whitespace-nowrap">
                        <p className="text-[10px] sm:text-xs font-bold text-pink-900 dark:text-pink-100">
                          Bakterier vokser
                        </p>
                        <p className="text-[8px] sm:text-[10px] text-pink-700 dark:text-pink-300">
                          F.eks. E. coli
                        </p>
                      </div>
                      {/* Arrow pointing left */}
                      <ArrowRight className="absolute -left-5 sm:-left-8 top-4 sm:top-6 h-3 w-3 sm:h-5 sm:w-5 text-fuchsia-500 dark:text-fuchsia-400 rotate-[225deg]" />
                    </div>

                    {/* Step 4: UVI - Left */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center text-center group">
                      <div className="bg-gradient-to-br from-pink-200 to-pink-100 dark:from-pink-800/50 dark:to-pink-800/30 rounded-xl w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center mb-1 sm:mb-2 border-2 border-pink-400 dark:border-pink-600 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <span className="text-base sm:text-2xl">⚡</span>
                      </div>
                      <div className="bg-pink-200/50 dark:bg-pink-800/20 rounded-lg px-1 py-0.5 sm:px-2 sm:py-1.5 border border-pink-300 dark:border-pink-700">
                        <p className="text-[10px] sm:text-xs font-bold text-pink-900 dark:text-pink-100">Ny UVI</p>
                        <p className="text-[8px] sm:text-[10px] text-pink-700 dark:text-pink-300">
                          Blærebetændelse
                        </p>
                      </div>
                      {/* Arrow pointing up */}
                      <ArrowRight className="absolute -top-5 sm:-top-8 left-4 sm:left-6 h-3 w-3 sm:h-5 sm:w-5 text-pink-500 dark:text-pink-400 rotate-[315deg]" />
                    </div>

                    {/* Center: Antibiotika */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-1">
                        <div className="flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-pink-200 to-rose-200 dark:from-pink-800/50 dark:to-rose-800/50 rounded-full border-2 border-pink-400 dark:border-pink-600 shadow-md">
                          <Pill className="h-3 w-3 sm:h-4 sm:w-4 text-pink-800 dark:text-pink-200" />
                          <span className="text-[10px] sm:text-xs font-bold text-pink-900 dark:text-pink-100">
                            ANTIBIOTIKA
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3 text-pink-600 dark:text-pink-400 rotate-180" />
                          <p className="text-[7px] sm:text-[9px] text-center text-pink-800 dark:text-pink-200 font-bold">
                            Dræber laktobaciller
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Explanation box - The vicious cycle mechanism */}
                <div className="mt-6 mb-6 max-w-lg mx-auto p-4 bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/40 dark:to-rose-900/40 rounded-lg border-2 border-pink-300 dark:border-pink-700">
                  <div className="flex items-start gap-2 mb-2">
                    <Pill className="h-4 w-4 text-pink-600 dark:text-pink-400 flex-shrink-0 mt-0.5" />
                    <p className="text-pink-900 dark:text-pink-100 font-bold text-sm">
                      Kender du det?
                    </p>
                  </div>

                  <div className="flex items-start gap-2 mb-2">
                    <div className="h-4 w-4 text-pink-600 dark:text-pink-400 flex-shrink-0 mt-0.5" />
                    <div className="space-y-3 text-pink-900 dark:text-pink-100 text-sm">
                      <p>
                        Du får antibiotika for blærebetændelse. Det virker, og du bliver rask. Men
                        kort efter kommer den tilbage.
                      </p>
                      <p>
                        Antibiotika er vigtigt, og det skal du tage, når du har blærebetændelse. Men
                        antibiotika dræber også de gode laktobaciller i skeden (Ferrer et al. 2017).
                        Derfor kan antibiotika starte en ond cirkel: Færre laktobaciller → vaginal
                        dysbiose → bakterier vokser → ny blærebetændelse.
                      </p>
                      <p>
                        Forskning viser at forebyggende antibiotika reducerer risikoen med{' '}
                        <strong className="text-pink-950 dark:text-pink-50">85%</strong>, men
                        effekten holder kun så længe man tager medicinen.{' '}
                        <strong className="text-pink-950 dark:text-pink-50">20-30%</strong> får
                        blærebetændelse kort tid efter, at de er stoppet (Jent et al. 2022). Derfor
                        er det vigtigt at støtte din vaginalflora med mælkesyre under og efter en
                        antibiotikakur.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Break the cycle CTA */}
                <div className="mt-6 text-center">
                  <div className="inline-block p-5 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 dark:from-primary/20 dark:via-accent/20 dark:to-secondary/20 rounded-xl border-2 border-primary/30 dark:border-primary/40 shadow-lg hover:scale-105 transition-transform duration-300">
                    <div className="bg-primary/20 dark:bg-primary/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 border-2 border-primary/40 dark:border-primary/50">
                      <CheckCircle2 className="h-7 w-7 text-primary dark:text-accent" />
                    </div>
                    <p className="text-lg font-bold text-foreground mb-2">
                      💡 Bryd den onde cirkel!
                    </p>
                    <p className="text-sm text-muted-foreground mb-1">
                      Genopret balancen med{' '}
                      <span className="font-bold text-foreground">vaginalt mælkesyre</span> under og
                      efter antibiotikakur
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Behandl årsagen, ikke kun symptomerne
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
