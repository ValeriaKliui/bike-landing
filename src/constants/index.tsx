import ScooterSrc from '@assets/images/scooter.png';
import PanelSrc from '@assets/images/panel.png';
import PeopleOnBikesSrc from '@assets/images/advantage_bike.png';
import PeopleTalkingSrc from '@assets/images/people_talking.png';
import CompanySrc from '@assets/images/company.png';

export const DESIGN_CARDS_INFO = [
    {
        title: 'Минималистичный дизайн',
        text: 'Рама, компоненты и аксессуары скутера выдержаны в едином стиле, где удобство пользователя выходит на первое место.  Одного прикосновения достаточно, чтобы запустить самокат.',
        imageSrc: ScooterSrc,
    },
    {
        title: 'Удобная панель управления',
        text: 'Удобно расположенные элементы управления. Отображение 8 типов данных в реальном времени: скорость, режим, заряд аккумулятора, состояние блокировки и другая информация.',
        imageSrc: PanelSrc,
    },
];

export const FAQ_ITEMS = [
    {
        question: 'На него нужны права категории M?',
        answer: 'Продуманный угол рассеивания света позволяет сохранять хорошую видимость, не ослепляя других участников движения.',
    },
    {
        question: 'У меня вес 135 кг, выдержит ли этот самокат?',
        answer: 'Самокат определенно выдержит и будет ехать, но не с максимальной скоростью.',
    },
    {
        question: 'Есть ли влагозащита?',
        answer: 'Электросамокат имеет степень защиты IP54. Он защищен от попадания пыли и брызг, падающих в любом направлении. Погружение в воду может привести к поломке.',
    },
    {
        question: 'Это версия для Китая или Европы?',
        answer: 'Это Европейская версия, со всеми обновлениями и евро-вилкой.',
    },
];

export const ADVANTAGES = [
    {
        advantage: 'Три режима скорости',
        description:
            'Три режима езды позволяют почуствовать себя комфортно в любой ситуации. Режим «S» увеличитвает скорость, если опаздываете на работу. Во время прогулки по парку активируйте режим «D». Включите режим «Пешеход», когда двигаетесь по оживлённой улице.',
        imgSrc: PeopleOnBikesSrc,
    },
    {
        advantage: 'Система восстановления энергии',
        description:
            'Во время торможения и движения по инерции система преобразовывает кинетическую энергию в электрическую, позволяя увеличить общий запас хода самоката.',
        imgSrc: PeopleTalkingSrc,
    },
    {
        advantage: 'Мощная батарея',
        description:
            'Самокат оснащен аккумулятором емкостью 12 800 мАч. Это позволяет преодолевать расстояния до 45 км без подзарядки.',
        imgSrc: CompanySrc,
    },
];
export const REVIEWS = [
    {
        name: 'Михаил Сафонов',
        review: 'Выбирал между двумя моделями: этим Mi Scooter Pro 2 и Ninebot Max 30P, в плюсах Макса - десятидюймовая резина и дальность пробега на одном заряде, скорость зарядки. В плюсах Xiaomi - Удобства переноски (вес аппарата, развесовка). В итоге купил Xiaomi и поставил 10 дюймовые шины - получил комфорт при небольшом весе самоката.',
    },
    {
        name: '',
        review: 'Владею также первой версией самоката (m365). В версии pro 2 исправлено множество недостатков m365: - усилен узел складывания и язычок - батарея находится в отдельном жёстком алюминиевом корпусе, что исключает её поломку из-за тряски - установлена поддержка заднего крыла и защита провода заднего габарита.',
    },

    {
        name: 'Алексей З.',
        review: 'Мой вес 57кг, прошитый с максимальной 32км в час в режиме S по Москве у меня осилил - 25км и еще оставалось 16% заряда. ОБЯЗАТЕЛЬНО: следите за давлением в камерах. Прям очень советую купить электронный насос от Xiaomi, и раз в неделю подкачивайте. С завода самокат приезжает с сильно недокачанными',
    },

    {
        name: '',
        review: 'В итоге купил Xiaomi и поставил 10 дюймовые шины - получил комфорт при небольшом весе самоката.',
    },

    {
        name: 'Антон',
        review: 'ОБЯЗАТЕЛЬНО: следите за давлением в камерах. Прям очень советую купить электронный насос от Xiaomi, и раз в неделю подкачивайте. С завода самокат приезжает с сильно недокачанными',
    },

    {
        name: 'Наталья',
        review: 'Мой вес 57кг, прошитый с максимальной 32км в час в режиме S по Москве у меня осилил - 25км и еще оставалось 16% заряда.',
    },
];
