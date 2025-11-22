import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const menuItems = [
  {
    category: "Кофе",
    items: [
      { name: "Эспрессо", price: "150₽", description: "Классический итальянский кофе" },
      { name: "Капучино", price: "200₽", description: "Эспрессо с молочной пенкой" },
      { name: "Латте", price: "220₽", description: "Нежный кофе с молоком" },
      { name: "Флэт уайт", price: "210₽", description: "Двойной эспрессо с микропенкой" },
    ]
  },
  {
    category: "Десерты",
    items: [
      { name: "Чизкейк", price: "280₽", description: "Классический нью-йоркский чизкейк" },
      { name: "Брауни", price: "250₽", description: "Шоколадный брауни с орехами" },
      { name: "Круассан", price: "180₽", description: "Французский круассан с маслом" },
      { name: "Морковный торт", price: "290₽", description: "С кремом и грецкими орехами" },
    ]
  }
];

const features = [
  {
    icon: "Coffee",
    title: "Свежая обжарка",
    description: "Обжариваем зёрна каждую неделю специально для вас"
  },
  {
    icon: "Heart",
    title: "Уютная атмосфера",
    description: "Мягкие диваны, тёплый свет и домашний уют"
  },
  {
    icon: "Wifi",
    title: "Быстрый Wi-Fi",
    description: "Работайте или учитесь в комфортной обстановке"
  }
];

export default function Index() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary">Coffee House</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#menu" className="text-foreground hover:text-primary transition-colors">Меню</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
          </nav>
          <Button className="hidden md:inline-flex">
            <Icon name="MapPin" size={16} className="mr-2" />
            Как добраться
          </Button>
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary leading-tight">
                Где каждая чашка — это история
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Добро пожаловать в наше уютное пространство, где аромат свежесваренного кофе встречается с домашней атмосферой. Мы создали место, куда хочется возвращаться снова и снова.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg">
                  <Icon name="Coffee" size={20} className="mr-2" />
                  Посмотреть меню
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Забронировать стол
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/18373eeb-69b1-435d-977b-67f19e9481a2/files/7b91ebfc-b477-4092-a5ba-9bf20322ceb6.jpg" 
                alt="Cappuccino with latte art"
                className="aspect-square rounded-2xl shadow-2xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={feature.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Наше меню</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Каждый напиток готовится с любовью и вниманием к деталям
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {menuItems.map((section, sectionIndex) => (
              <div key={sectionIndex} className="animate-fade-in">
                <h3 className="text-3xl font-bold mb-8 text-primary border-b-2 border-primary pb-2">
                  {section.category}
                </h3>
                <div className="space-y-6">
                  {section.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-xl font-semibold">{item.name}</h4>
                          <span className="text-xl font-bold text-primary">{item.price}</span>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/18373eeb-69b1-435d-977b-67f19e9481a2/files/3b9e181d-01e9-4b51-82eb-6796fb4c2040.jpg" 
                alt="Cozy coffee shop interior"
                className="aspect-[4/3] rounded-2xl shadow-2xl object-cover w-full"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Наша история
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы открылись в 2020 году с простой идеей: создать место, где каждый гость чувствует себя как дома. Наша кофейня — это не просто место, где можно выпить кофе. Это пространство для встреч, работы, творчества и отдыха.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Мы тщательно выбираем зёрна, работаем с лучшими обжарщиками и постоянно совершенствуем наши рецепты. Но главное — мы создаём атмосферу, в которой хочется находиться.
              </p>
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-muted-foreground">Чашек в день</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">4.9</p>
                  <p className="text-muted-foreground">Рейтинг гостей</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">3</p>
                  <p className="text-muted-foreground">Года с вами</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Ждём вас в гости
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Мы работаем каждый день с 8:00 до 22:00. Приходите на чашечку кофе или оставайтесь на весь день.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-lg">
              <Icon name="MapPin" size={20} className="text-primary" />
              <span>ул. Примерная, 123</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Icon name="Phone" size={20} className="text-primary" />
              <span>+7 (900) 123-45-67</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Coffee House</h3>
              <p className="opacity-90">Ваше любимое место для кофе и встреч</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <p className="opacity-90 mb-2">ул. Примерная, 123</p>
              <p className="opacity-90 mb-2">+7 (900) 123-45-67</p>
              <p className="opacity-90">info@coffeehouse.ru</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Время работы</h4>
              <p className="opacity-90 mb-2">Пн-Вс: 8:00 - 22:00</p>
              <div className="flex gap-4 mt-4">
                <Icon name="Instagram" size={24} className="opacity-90 hover:opacity-100 cursor-pointer transition-opacity" />
                <Icon name="Facebook" size={24} className="opacity-90 hover:opacity-100 cursor-pointer transition-opacity" />
                <Icon name="Mail" size={24} className="opacity-90 hover:opacity-100 cursor-pointer transition-opacity" />
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center opacity-90">
            <p>&copy; 2024 Coffee House. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}