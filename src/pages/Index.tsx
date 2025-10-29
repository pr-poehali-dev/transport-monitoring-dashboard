import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const bonusBalance = 12450;
  const contracts = [
    { id: 'CT-2024-001', amount: 2500000, period: '01.01.2024 - 31.12.2024', vehicles: 15, status: 'active' },
    { id: 'CT-2024-002', amount: 1800000, period: '15.03.2024 - 15.03.2025', vehicles: 8, status: 'active' },
  ];

  const payments = [
    { date: '15.10.2024', amount: 208333, status: 'paid', invoice: 'INV-2024-120' },
    { date: '15.11.2024', amount: 208333, status: 'pending', invoice: 'INV-2024-121' },
    { date: '15.12.2024', amount: 208333, status: 'upcoming', invoice: 'INV-2024-122' },
  ];

  const vehicles = [
    { name: 'КамАЗ-6520', regNumber: 'А123ВС777', device: 'GPS-Tracker Pro', status: 'online', lastUpdate: '2 мин назад' },
    { name: 'МАЗ-5440', regNumber: 'В456ЕК199', device: 'GPS-Tracker Pro', status: 'online', lastUpdate: '5 мин назад' },
    { name: 'Volvo FH16', regNumber: 'С789МН77', device: 'GPS-Tracker Premium', status: 'offline', lastUpdate: '3 часа назад' },
    { name: 'Scania R500', regNumber: 'Е012ОП178', device: 'GPS-Tracker Pro', status: 'online', lastUpdate: '1 мин назад' },
  ];

  const menuItems = [
    { id: 'dashboard', label: 'Главная', icon: 'LayoutDashboard' },
    { id: 'contracts', label: 'Мои контракты', icon: 'FileText' },
    { id: 'payments', label: 'Платежи', icon: 'CreditCard' },
    { id: 'vehicles', label: 'Моя техника', icon: 'Truck' },
    { id: 'bonuses', label: 'Бонусы', icon: 'Gift' },
    { id: 'notifications', label: 'Уведомления', icon: 'Bell' },
    { id: 'support', label: 'Поддержка', icon: 'LifeBuoy' },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-card p-6 hidden lg:block">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <Icon name="Radar" size={28} />
            TransitControl
          </h1>
          <p className="text-sm text-muted-foreground mt-1">Мониторинг транспорта</p>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'hover:bg-accent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name={item.icon} size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <Separator className="my-6" />

        <div className="p-4 rounded-lg bg-accent/50">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="User" size={16} />
            <span className="text-sm font-medium">ООО "ТрансЛогистик"</span>
          </div>
          <p className="text-xs text-muted-foreground">ИНН: 7701234567</p>
        </div>
      </aside>

      {/* Mobile menu */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t p-2 z-50">
        <div className="flex justify-around">
          {menuItems.slice(0, 5).map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg ${
                activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <Icon name={item.icon} size={20} />
              <span className="text-xs">{item.label.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 p-6 lg:p-8 pb-20 lg:pb-8">
        {/* Dashboard */}
        {activeSection === 'dashboard' && (
          <div className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Добро пожаловать, ТрансЛогистик!</h2>
              <p className="text-muted-foreground">Обзор вашего парка и активных контрактов</p>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="transition-transform duration-200 hover:scale-105">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Бонусные баллы</CardTitle>
                  <Icon name="Coins" className="text-primary" size={20} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{bonusBalance.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground mt-1">+450 за этот месяц</p>
                  <Progress value={65} className="mt-3" />
                </CardContent>
              </Card>

              <Card className="transition-transform duration-200 hover:scale-105">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Активных контрактов</CardTitle>
                  <Icon name="FileCheck" className="text-green-500" size={20} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{contracts.length}</div>
                  <p className="text-xs text-muted-foreground mt-1">На сумму 4.3 млн ₽</p>
                </CardContent>
              </Card>

              <Card className="transition-transform duration-200 hover:scale-105">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Техника онлайн</CardTitle>
                  <Icon name="Truck" className="text-blue-500" size={20} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {vehicles.filter(v => v.status === 'online').length}/{vehicles.length}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">75% в работе</p>
                </CardContent>
              </Card>

              <Card className="transition-transform duration-200 hover:scale-105">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Ближайший платеж</CardTitle>
                  <Icon name="Calendar" className="text-orange-500" size={20} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">15 ноя</div>
                  <p className="text-xs text-muted-foreground mt-1">208 333 ₽</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" size={20} />
                    Активные акции
                  </CardTitle>
                  <CardDescription>Эксклюзивные предложения для вас</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">Скидка 15% на новое оборудование</h4>
                      <Badge>До 31 дек</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">При заказе 5+ GPS-трекеров Premium</p>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">Двойные бонусы</h4>
                      <Badge variant="secondary">Активна</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Получайте x2 баллов за каждый платеж в ноябре</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Truck" size={20} />
                    Статус техники
                  </CardTitle>
                  <CardDescription>Последние обновления</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {vehicles.slice(0, 3).map((vehicle) => (
                      <div key={vehicle.regNumber} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${vehicle.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`} />
                          <div>
                            <p className="font-medium text-sm">{vehicle.name}</p>
                            <p className="text-xs text-muted-foreground">{vehicle.regNumber}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant={vehicle.status === 'online' ? 'default' : 'secondary'}>
                            {vehicle.status === 'online' ? 'Онлайн' : 'Офлайн'}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">{vehicle.lastUpdate}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4" onClick={() => setActiveSection('vehicles')}>
                    Вся техника
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Contracts */}
        {activeSection === 'contracts' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Мои контракты</h2>
            <div className="space-y-4">
              {contracts.map((contract) => (
                <Card key={contract.id} className="transition-transform duration-200 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {contract.id}
                          <Badge variant={contract.status === 'active' ? 'default' : 'secondary'}>
                            {contract.status === 'active' ? 'Активен' : 'Завершен'}
                          </Badge>
                        </CardTitle>
                        <CardDescription className="mt-2">Период: {contract.period}</CardDescription>
                      </div>
                      <Icon name="FileText" size={24} className="text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Сумма договора</p>
                        <p className="text-2xl font-bold">{contract.amount.toLocaleString()} ₽</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Количество техники</p>
                        <p className="text-2xl font-bold">{contract.vehicles} ед.</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Ежемесячный платеж</p>
                        <p className="text-2xl font-bold">{Math.round(contract.amount / 12).toLocaleString()} ₽</p>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-6">
                      <Button variant="outline">
                        <Icon name="Download" size={16} className="mr-2" />
                        Скачать договор
                      </Button>
                      <Button variant="outline">
                        <Icon name="Eye" size={16} className="mr-2" />
                        Подробнее
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Payments */}
        {activeSection === 'payments' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Платежи</h2>
            <Card>
              <CardHeader>
                <CardTitle>История платежей</CardTitle>
                <CardDescription>Информация о текущих и предстоящих платежах</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {payments.map((payment) => (
                    <div key={payment.invoice} className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-full ${
                          payment.status === 'paid' ? 'bg-green-500/10' :
                          payment.status === 'pending' ? 'bg-orange-500/10' : 'bg-blue-500/10'
                        }`}>
                          <Icon 
                            name={payment.status === 'paid' ? 'CheckCircle2' : payment.status === 'pending' ? 'Clock' : 'Calendar'} 
                            size={20}
                            className={
                              payment.status === 'paid' ? 'text-green-500' :
                              payment.status === 'pending' ? 'text-orange-500' : 'text-blue-500'
                            }
                          />
                        </div>
                        <div>
                          <p className="font-medium">{payment.invoice}</p>
                          <p className="text-sm text-muted-foreground">Дата: {payment.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold">{payment.amount.toLocaleString()} ₽</p>
                        <Badge 
                          variant={
                            payment.status === 'paid' ? 'default' :
                            payment.status === 'pending' ? 'secondary' : 'outline'
                          }
                          className="mt-1"
                        >
                          {payment.status === 'paid' ? 'Оплачен' : payment.status === 'pending' ? 'Ожидает' : 'Предстоит'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Vehicles */}
        {activeSection === 'vehicles' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Моя техника</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {vehicles.map((vehicle) => (
                <Card key={vehicle.regNumber} className="transition-transform duration-200 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Icon name="Truck" size={20} />
                          {vehicle.name}
                        </CardTitle>
                        <CardDescription className="mt-1">{vehicle.regNumber}</CardDescription>
                      </div>
                      <Badge variant={vehicle.status === 'online' ? 'default' : 'secondary'}>
                        {vehicle.status === 'online' ? 'Онлайн' : 'Офлайн'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Устройство:</span>
                        <span className="font-medium text-sm">{vehicle.device}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Обновлено:</span>
                        <span className="font-medium text-sm">{vehicle.lastUpdate}</span>
                      </div>
                      <Separator />
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Icon name="MapPin" size={14} className="mr-2" />
                          На карте
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Icon name="History" size={14} className="mr-2" />
                          История
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Bonuses */}
        {activeSection === 'bonuses' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Бонусы и привилегии</h2>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-2xl">Ваш баланс бонусных баллов</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-bold text-primary mb-4">{bonusBalance.toLocaleString()}</div>
                <Progress value={65} className="mb-2" />
                <p className="text-sm text-muted-foreground">До следующего уровня осталось 2,550 баллов</p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Gift" size={20} />
                    Доступные награды
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 rounded-lg border hover:bg-accent/50 cursor-pointer transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-medium">Скидка 5% на следующий платеж</p>
                      <Badge>5,000</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Экономия до 10,000 ₽</p>
                  </div>

                  <div className="p-3 rounded-lg border hover:bg-accent/50 cursor-pointer transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-medium">Бесплатная установка трекера</p>
                      <Badge>8,000</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Экономия 3,500 ₽</p>
                  </div>

                  <div className="p-3 rounded-lg border hover:bg-accent/50 cursor-pointer transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-medium">Продление гарантии на 6 месяцев</p>
                      <Badge>12,000</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Дополнительная защита</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="History" size={20} />
                    История начислений
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b">
                    <div>
                      <p className="font-medium text-sm">Платеж CT-2024-001</p>
                      <p className="text-xs text-muted-foreground">15 окт 2024</p>
                    </div>
                    <span className="text-green-500 font-bold">+200</span>
                  </div>

                  <div className="flex items-center justify-between pb-2 border-b">
                    <div>
                      <p className="font-medium text-sm">Акция x2 бонусов</p>
                      <p className="text-xs text-muted-foreground">10 окт 2024</p>
                    </div>
                    <span className="text-green-500 font-bold">+250</span>
                  </div>

                  <div className="flex items-center justify-between pb-2 border-b">
                    <div>
                      <p className="font-medium text-sm">Платеж CT-2024-002</p>
                      <p className="text-xs text-muted-foreground">01 окт 2024</p>
                    </div>
                    <span className="text-green-500 font-bold">+150</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Notifications */}
        {activeSection === 'notifications' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Уведомления и настройки</h2>
            <Card>
              <CardHeader>
                <CardTitle>Настройки уведомлений</CardTitle>
                <CardDescription>Управляйте способами получения уведомлений</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={20} className="text-muted-foreground" />
                    <div>
                      <p className="font-medium">Email уведомления</p>
                      <p className="text-sm text-muted-foreground">О платежах и изменениях в контрактах</p>
                    </div>
                  </div>
                  <Badge>Включено</Badge>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <Icon name="Bell" size={20} className="text-muted-foreground" />
                    <div>
                      <p className="font-medium">Push-уведомления</p>
                      <p className="text-sm text-muted-foreground">Срочные оповещения о статусе техники</p>
                    </div>
                  </div>
                  <Badge>Включено</Badge>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <Icon name="MessageSquare" size={20} className="text-muted-foreground" />
                    <div>
                      <p className="font-medium">SMS уведомления</p>
                      <p className="text-sm text-muted-foreground">Критические события</p>
                    </div>
                  </div>
                  <Badge variant="secondary">Выключено</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Support */}
        {activeSection === 'support' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Поддержка</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MessageCircle" size={20} />
                    Связаться с нами
                  </CardTitle>
                  <CardDescription>Выберите удобный способ связи</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Icon name="Mail" size={18} className="mr-3" />
                    support@transitcontrol.ru
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Icon name="Phone" size={18} className="mr-3" />
                    8 (800) 555-35-35
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Icon name="MessageSquare" size={18} className="mr-3" />
                    Онлайн-чат
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="HelpCircle" size={20} />
                    Часто задаваемые вопросы
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 rounded-lg border hover:bg-accent/50 cursor-pointer transition-colors">
                    <p className="font-medium text-sm">Как добавить новую технику?</p>
                  </div>
                  <div className="p-3 rounded-lg border hover:bg-accent/50 cursor-pointer transition-colors">
                    <p className="font-medium text-sm">Как использовать бонусные баллы?</p>
                  </div>
                  <div className="p-3 rounded-lg border hover:bg-accent/50 cursor-pointer transition-colors">
                    <p className="font-medium text-sm">Как скачать счета за период?</p>
                  </div>
                  <Button variant="link" className="w-full mt-2">
                    Посмотреть все вопросы
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
