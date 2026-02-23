import { Card, CardContent } from '@/components/ui/card';
import {
  TrendingUp,
  Sparkles,
  Star,
  CheckCircle2,
  Calendar,
  ShoppingBag,
  BookOpen,
  XCircle,
  Lightbulb,
} from 'lucide-react';

export const SolutionSection = () => {
  return (
    <section
      id="solution"
      className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-background via-primary/5 to-muted/30"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl lg:max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 pb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent max-w-3xl mx-auto">
              Mælkesyrebehandling
            </h2>
            <p className="text-lg md:text-xl lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2 lg:leading-relaxed">
              Heldigvis findes der en forebyggende{' '}
              <strong className="text-foreground">mælkesyrebehandling</strong> der genopretter din
              vaginale mikrobiota og kan bidrage til at forebygge blærebetændelse
            </p>
          </div>

          {/* MÆLKESYREBEHANDLING (FOREBYGGELSE) */}
          <div className="mb-8 md:mb-12 lg:mb-16">
            {/* ADVARSEL */}
            <div className="flex justify-center text-center mb-10 md:mb-16 lg:mb-20 px-2">
              <Card className="border-2 border-red-200 dark:border-red-900/30 bg-gradient-to-br from-red-50/50 to-rose-50/50 dark:from-red-950/20 dark:to-rose-950/20 shadow-lg inline-block">
                <CardContent className="p-3 sm:p-4 md:p-6 lg:p-8">
                  <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-2 text-foreground">
                    ⚠️ VIGTIGT: Mælkesyrebehandling behandler ikke en aktiv blærebetændelse
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Hvis du har symptomer på blærebetændelse, skal du kontakte din læge.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-accent/30 shadow-[var(--shadow-card)] bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="p-5 sm:p-6 md:p-8 lg:p-12">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:gap-4 mb-4 md:mb-6 lg:mb-8">
                      <div className="rounded-full bg-accent/20 w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="h-5 w-5 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-accent" />
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                        Hvad er mælkesyrebehandling?
                      </h3>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      Mælkesyrebehandling bruger{' '}
                      <strong className="text-foreground">vaginal mælkesyre</strong> til at
                      forebygge tilbagevendende blærebetændelse.
                    </p>
                    <div className="p-3 bg-primary/5 rounded-lg border border-primary/15 flex items-start gap-2 mb-6">
                      <Lightbulb className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Mælkesyre ≠ mælkesyrebakterier:</strong>{' '}
                        Mælkesyre (lactic acid) er selve stoffet, ikke det samme som
                        mælkesyrebakterier (probiotika). Denne behandling bruger mælkesyre, som
                        virker direkte.
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      Mælkesyren fås som{' '}
                      <strong className="text-foreground">gel eller vagitorier med lav pH</strong>{' '}
                      (omkring 4). Det er det samme stof, dine egne laktobaciller producerer
                      naturligt. Påført i skeden hjælper det med at genoprette balancen i den
                      vaginale mikrobiota ved vaginal dysbiose og kan beskytte mod blærebetændelse,
                      bakteriel vaginose og andre infektioner.
                    </p>

                    <div className="bg-background/70 rounded-lg p-5 border border-accent/20">
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <TrendingUp className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-muted-foreground">
                            <strong className="text-foreground">Lovende forskning:</strong> 72
                            kvinder med gentagne blærebetændelser (gns. 4/år) brugte mælkesyregel
                            2-3 dage månedligt i 4 måneder. I studiet forblev 64% fri for nye
                            blærebetændelser. Blandt deltagere med konsekvent brug steg dette til
                            72% (Diebold et al. 2021).
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <TrendingUp className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-muted-foreground">
                            <strong className="text-foreground">Nyt studie:</strong> 55 raske
                            kvinder uden symptomer brugte en gel med mælkesyre og glycogen 2x
                            ugentligt i 8 uger. Vaginal pH faldt markant og den vaginale mikrobiota
                            blev sundere, med færre skadelige bakterier bl.a.{' '}
                            <em>Prevotella amnii</em> og BVAB1 (Campaner et al. 2025).
                          </p>
                        </div>
                        <p className="text-sm text-muted-foreground/70 italic mt-2">
                          Bemærk: Begge studier havde små testgrupper og ingen kontrolgruppe, så der
                          er brug for større, kontrollerede studier for at bekræfte effekten.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                    <div className="mb-6 md:mb-8">
                      <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                        <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                        Sådan gør du:
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Vælg efter din situation:
                      </p>
                      <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wide mb-2">
                        Løbende forebyggelse
                      </p>
                      <div className="space-y-3 mb-5">
                        <div className="flex items-start gap-3">
                          <div className="rounded-full bg-primary/30 w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Star className="h-4 w-4 text-accent" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground text-sm mb-1">
                              Hvis du får menstruation
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Vaginal mælkesyre i 2-3 dage efter hver menstruation
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="rounded-full bg-secondary/30 w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Star className="h-4 w-4 text-accent" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground text-sm mb-1">
                              Hvis du ikke får menstruation
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Vaginal mælkesyre i 2-3 dage på samme tidspunkt hver måned
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wide mb-2">
                        Ved specifik risiko
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="rounded-full bg-accent/30 w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Star className="h-4 w-4 text-accent" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground text-sm mb-1">
                              Hvis du får blærebetændelse efter sex
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Vaginal mælkesyre efter sex, fortsæt et par dage
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="rounded-full bg-accent/30 w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Star className="h-4 w-4 text-accent" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground text-sm mb-1">
                              Hvis du får/har fået antibiotika
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Brug vaginal mælkesyre under og efter antibiotikakuren, men ikke i
                              længere tid end den anbefalede periode for produktet
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-background/50 rounded-lg p-5 border-2 border-accent/30 mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <h5 className="font-bold text-foreground">Praktiske tips 💡</h5>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <Lightbulb className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-foreground">
                              Brug før sengetid (hvis muligt):
                            </strong>{' '}
                            Produktet virker bedst om aftenen, så det kan virke hele natten uden at
                            løbe ud.
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Lightbulb className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-foreground">
                              Brug ikke under menstruation:
                            </strong>{' '}
                            Vent til din menstruation er slut, da blodet kan skylle produktet ud.
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Lightbulb className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-foreground">Virker det ikke?</strong> Prøv at
                            bruge mælkesyre oftere i løbet af måneden, eller brug det både aften og
                            morgen efter sex. Det varierer fra person til person, hvad der virker
                            bedst.
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Lightbulb className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-foreground">Prøv vagitorier:</strong> Hvis gel
                            ikke virker optimalt, kan vagitorier være et alternativ. Med fingeren
                            kan de placeres længere oppe i skeden, hvor de kan have bedre effekt.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sådan vælger du det rigtige produkt */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 pb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Sådan vælger du det rigtige produkt
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                Der findes mange produkter på markedet, men ikke alle er lige effektive. Her er hvad
                du skal kigge efter.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {/* To-kolonne: Kig efter / Undgå */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Kig efter - Grøn */}
                <Card className="border-2 border-secondary/40 shadow-[var(--shadow-card)] overflow-hidden">
                  <div className="bg-secondary/10 px-6 py-4 border-b border-secondary/20">
                    <h4 className="text-xl font-bold text-secondary flex items-center gap-2">
                      <CheckCircle2 className="h-6 w-6" />
                      Kig efter
                    </h4>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-secondary/20 w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-secondary font-bold text-sm">1</span>
                        </div>
                        <div>
                          <strong className="text-foreground">
                            Mælkesyre (lactic acid) som aktiv ingrediens
                          </strong>
                          <p className="text-sm text-muted-foreground">
                            Selve stoffet der sænker pH direkte. Virker med det samme, i modsætning
                            til mælkesyrebakterier som først skal kolonisere.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-secondary/20 w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-secondary font-bold text-sm">2</span>
                        </div>
                        <div>
                          <strong className="text-foreground">Lav pH (tæt på 4)</strong>
                          <p className="text-sm text-muted-foreground">
                            En pH tæt på 4 matcher skedens naturlige surhedsgrad.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-secondary/20 w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-secondary font-bold text-sm">3</span>
                        </div>
                        <div>
                          <strong className="text-foreground">
                            "Bakteriel vaginose" på pakningen
                          </strong>
                          <p className="text-sm text-muted-foreground">
                            Produkter godkendt til behandling af BV-symptomer har ofte mælkesyre som
                            hovedingrediens.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-secondary/20 w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-secondary font-bold text-sm">4</span>
                        </div>
                        <div>
                          <strong className="text-foreground">Gel eller vagitorier</strong>
                          <p className="text-sm text-muted-foreground">
                            Begge formater findes på apoteket (f.eks. 7 stk engangsdoser).
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-secondary/20 w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-secondary font-bold text-sm">5</span>
                        </div>
                        <div>
                          <strong className="text-foreground">CE-mærket</strong>
                          <p className="text-sm text-muted-foreground">Godkendt medicinsk udstyr</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Undgå - Rød */}
                <Card className="border-2 border-destructive/40 shadow-[var(--shadow-card)] overflow-hidden">
                  <div className="bg-destructive/10 px-6 py-4 border-b border-destructive/20">
                    <h4 className="text-xl font-bold text-destructive flex items-center gap-2">
                      <XCircle className="h-6 w-6" />
                      Undgå
                    </h4>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-foreground">
                            Vaginale mælkesyrebakterier (probiotika)
                          </strong>
                          <p className="text-sm text-muted-foreground">
                            Ikke det samme som mælkesyre. Usikker effekt. Bakterierne skal overleve,
                            kolonisere og producere nok D-mælkesyre, og ikke alle stammer er lige
                            gode til det. Et studie af Jepsen et al. (2022) viste at
                            Lactobacillus-stammerne (L. gasseri + L. rhamnosus) ikke forbedrede den
                            vaginale mikrobiota bedre end placebo. Mens Gupta et al. (2024) og
                            Stapleton et al. (2011) viste at forekomst af blærebetændelse kan
                            reduceres signifikant ved vaginalt brug af bestemte
                            Lactobacillus-stammer (f.eks. L. crispatus).
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-foreground">
                            Orale mælkesyrebakterier (probiotika)
                          </strong>
                          <p className="text-sm text-muted-foreground">
                            Ikke det samme som mælkesyre. Flere studier indiker at orale kapsler
                            ikke påvirker den vaginale mikrobiota. Lactobacillus-stammerne (L.
                            rhamnosus GR-1 + L. reuteri RC-14) blev enten slet ikke fundet eller kun
                            hos meget få kvinder efter oral indtagelse (Husain et al. 2020, Yefet et
                            al. 2020, Wolff et al. 2019, Yang et al. 2020).
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Tip og info boks */}
              <Card className="border-2 border-primary/20 shadow-[var(--shadow-card)]">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Tip om indholdslisten */}
                    <div className="flex gap-4">
                      <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">Tjek indholdslisten</h4>
                        <p className="text-sm text-muted-foreground">
                          Ingredienser står ofte i rækkefølge efter mængde.{' '}
                          <strong className="text-foreground">Mælkesyre</strong> (lactic acid) skal
                          stå blandt de første.
                        </p>
                      </div>
                    </div>

                    {/* Hvor kan du købe */}
                    <div className="flex gap-4">
                      <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <ShoppingBag className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">Hvor kan du købe?</h4>
                        <p className="text-sm text-muted-foreground">
                          Apoteket har mælkesyre til BV-behandling. Vælg produkter med{' '}
                          <strong className="text-foreground">mælkesyre</strong> (lactic acid) som
                          ingrediens, ikke mælkesyrebakterier (probiotika).
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
