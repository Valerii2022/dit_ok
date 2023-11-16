import aboutImg from "../../images/about.png";
import css from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={css.aboutSection} id="about">
      <h2 className={css.title}>Про нас</h2>
      <div className={css.aboutContentWrap}>
        <div className={css.aboutContent}>
          <p>
            Дитячі товари з доставкою додому – саме такий шопінг віддають
            перевагу сучасним батькам. В онлайн-магазині «DitOk» можна купити
            все необхідне для дітей різного віку – від новонародженого до
            підлітка. Ви заощадите час! Присвятіть його собі, чоловікові чи
            дитині, займіться улюбленою справою, відпочиньте, а ми швидко
            доставимо необхідні товари. Більше ніяких стомлюючих поїздок по
            магазинах у різні частини міста та дитячого плачу в чергах! Вигідні
            покупки вже чекають на вас у смартфоні або на комп&#96;ютері.
          </p>
          <p>
            Бути батьком – відповідальна робота. Турбота про дітей передбачає
            вирішення маси побутових питань: гігієна, годування, ігри та
            розвиток, постійне оновлення гардеробу, захоплюючий та приємний
            відпочинок. Дитячий магазин «DitOk» – ваш вірний помічник. Ми
            пропонуємо широкий асортимент якісних товарів, знаємо, як полегшити
            побут, сприяти розвитку та урізноманітнити розваги. Онлайн-каталог
            включає:
          </p>
          <ul className={css.aboutContentList}>
            <li>
              одяг та взуття для новонароджених, малюків дитсадкового віку,
              школярів;
            </li>
            <li>
              іграшки – для найменших, навчальні, набори для творчості, ляльки,
              машинки, конструктори та інше;
            </li>
            <li>меблі та аксесуари для дитячих кімнат;</li>
            <li>товари для годування, кухонне приладдя;</li>
            <li>засоби гігієни;</li>
            <li>візки та автокрісла;</li>
            <li>різноманітний транспорт для дітей;</li>
            <li>книги та навчальні посібники, у тому числі для дорослих.</li>
          </ul>
          <p>
            Вибирайте все для дітей в одному місці. Це зручно! Поступово
            подивіться весь каталог або налаштуйте фільтри, то ви швидше
            знайдете необхідне. Пропонуємо понад 50 тисяч дитячих товарів від
            200+ українських та зарубіжних брендів. Асортименти оновлюється
            щодня. Модні, стильні, якісні речі, великогабаритні товари, дитячі
            меблі, іграшки зі швидкою доставкою (1–3 дні, і товар у вас у місті)
            – це саме те, що потрібно вам та вашій дитині.
          </p>
        </div>
        <img src={aboutImg} alt="About us" width={413} />
      </div>
    </section>
  );
};

export default AboutUs;