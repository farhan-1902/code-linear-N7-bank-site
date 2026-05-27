import { articles } from "../data/info";
import ArrowButton from "./ui/ArrowButton";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";

export function ArticlesSection() {
  const featuredArticle = articles[0];
  const remainingArticles = articles.slice(1, 3);

  return (
    <section className="bg-[linear-gradient(to_right,#000D12,#001824)] py-24 text-white">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6 lg:top-10">
            <h2 className="text-3xl text-white font-light sm:text-4xl leading-tight">
              Get yourself up-to-speed on all the things happening in fintech
            </h2>
            <Button href="#demo" variant="secondary" size="lg">
              INSIGHTS
            </Button>
          </div>
          <div className="space-y-6">
            {featuredArticle && (
              <Card
                variant="horizontal"
                category={featuredArticle.category || "GETTING STARTED"}
                title={featuredArticle.title}
                author="David Grohl"
                date={featuredArticle.date || "17/08/24"}
                iconSrc={`/assets/Sections/${featuredArticle.iconName}.svg`}
                className="w-full"
              />
            )}

            <div className="grid gap-6 sm:grid-cols-2">
              {remainingArticles.map((item, index) => (
                <Card
                  key={item.title || index}
                  variant="vertical"
                  category={item.category || "GETTING STARTED"}
                  title={item.title}
                  author="David Grohl"
                  date={item.date || "17/08/24"}
                />
              ))}
            </div>
            <ArrowButton style={{marginLeft: "75%"}}>READ ALL INSIGHTS</ArrowButton>
          </div>

        </div>
      </div>
    </section>
  );
}