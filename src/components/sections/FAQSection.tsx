import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle, HelpCircle, ChevronDown } from 'lucide-react';
import { faqs } from '@/data/faqs';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl lg:max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 pb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent max-w-3xl mx-auto">
              Ofte stillede spørgsmål
            </h2>
            <p className="text-lg md:text-xl lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2 lg:leading-relaxed">
              Find svar på spørgsmål om vaginal dysbiose, symptomer og hvornår du bør handle
            </p>
          </div>

          <div className="space-y-3 md:space-y-4 lg:space-y-5 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left p-4 sm:p-6 lg:p-8 flex items-start justify-between gap-3 sm:gap-4 hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-start gap-2 sm:gap-3 lg:gap-4 flex-1">
                    <HelpCircle className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-primary flex-shrink-0 mt-0.5 sm:mt-1" />
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground pr-2 sm:pr-4">{faq.question}</h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 pt-2">
                    <div className="pl-7 sm:pl-9 lg:pl-11 text-muted-foreground leading-relaxed whitespace-pre-line text-sm sm:text-base">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5">
              <CardContent className="p-6">
                <AlertCircle className="h-8 w-8 text-accent mx-auto mb-3" />
                <p className="text-sm text-muted-foreground max-w-md">
                  <strong className="text-foreground">Har du flere spørgsmål?</strong> <br /> Denne
                  information er kun vejledende. Konsulter altid din læge eller gynækolog for
                  personlig rådgivning om din specifikke situation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
