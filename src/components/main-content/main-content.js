import React from "react";

import './main-content.css';
import book from '../../images/book.svg';
import image from '../../images/image.png';
import check from '../../images/check.svg';
import InstructionBtn from "./instruction-btn";

const MainContent = () => {
    return (
        <div className='main-content'>
            <div id='card-0' className='card card_first'>
                <h1 className='card__title-large'>Остеопороз</h1>
                <p className='card__text'>С остеопорозом сталкиваются практически все врачи, работающие с пациентами старших возрастных групп. Особенно часто это заболевание встречается у женщин в периоде постменопаузы.</p>
            </div>

            <div id='card-1' className='card'>
                <p className='card__title'>1. Опасность остеопороза</p>
                <p className='card__text'>При консультациях женщин в постменопаузальном периоде необходимо особое внимание обратить на состояние их опорно-двигательного аппарата, т.к. остеопороз, как правило, возникает на фоне гормональных изменений.</p>
                <p className='card__text'>Коварство этого заболевания заключается в том, что оно не имеет выраженной симптоматики и долгое время может протекать без каких-либо проявлений, поэтому диагностика необходима, даже если пациентка не высказывает жалоб на состояние костей и суставов.</p>
                <p className='card__text'>Опасность остеопороза – в постепенном снижении минеральной плотности костной ткани и нарушении строения кости, что в дальнейшем может привести к развитию переломов даже без существенной нагрузки. Переломы могут произойти как в костях конечностей, так и в позвоночнике. Особенно опасны переломы шейки бедренной кости. Они трудно поддаются лечению, часто ведут к инвалидизации, а иногда могут быть причиной летального исхода на фоне осложнений, развившихся вследствие снижения мобильности.</p>
                <p className='card__text'>Смертность в течение первого года после остеопоротического перелома составляет 31-35%. В европейских странах на эти переломы выпадает больше утраченных лет жизни, связанных с инвалидностью, чем на все общие случаи рака, за исключением рака легких.<sup>1</sup></p>

                <div className='card__reference'>
                    <img className='card__book' src={book} alt="book"/>
                    <p className='card__reference_top'>1. Джонелл О. и Канис Дж. А. Оценка частоты заболеваемости и инвалидности по всему миру вследствие остеопоротических переломов. Международный журнал остеопороза. 2006; 17:1726 - 1733.</p>
                </div>
            </div>

            <div id='card-2' className="card card_gray">
                <p className='card__title'>2. Группа и факторы риска</p>
                <p className="card__text">В группу риска развития остеопороза входят практически все женщины в период менопаузы. Особое внимание следует обращать на тех, у кого имеется соответствующая отягощённая наследственность.</p>
                <p className="card__text_margin_bottom">Остеопороз наблюдается и у лиц мужского пола, но женщины страдают от этого заболевания значительно чаще. Согласно результатам эпидемиологических исследований, среди городского населения РФ старших возрастных групп 24% женщин (6,7 млн.) и 13% мужчин (2,3 млн.) уже обращались к травматологу по поводу перенесённых переломов.<sup>2</sup></p>
                <p className="card__text_bold">Основные факторы риска развития остеопороза:</p>
                <ul className='card__list'>
                    <li>рацион с низким содержанием кальция и витамина Д (у веганов);</li>
                    <li>европеоидная или азиатская раса;</li>
                    <li>низкая масса тела;</li>
                    <li>курение;</li>
                    <li>злоупотребление алкоголем;</li>
                    <li>низкая физическая активность;</li>
                    <li>длительный приём ряда лекарственных препаратов (глюкокортикоидов и др.).</li>
                </ul>

                <div className='card__reference'>
                    <img className='card__book' src={book} alt="book"/>
                    <p className='card__reference_top'>2. Михайлов Е.Е., Беневоленская Л.И. Руководство по остеопорозу. М.: БИНОМ. Лаборатория знаний, 2003. С. 10 – 55.</p>
                </div>
            </div>

            <div id='card-3' className="card">
                <p className='card__title'>3. Симптомы и проявления</p>
                <p className="card__text">Поскольку длительное время остеопороз развивается бессимптомно, то заболевание обычно выявляется при рентгенологическом или КТ обследовании.</p>
                <p className="card__text">С появлением значительных структурных изменений костной ткани возможно развитие низкоэнергетических переломов, возникающих при минимальных физических нагрузках, иногда спонтанно.</p>
                <p className="card__text">Переломы верхних конечностей сопровождаются болью и нарушением функции конечности. Переломы позвонков вызывают хроническую боль в спине, интенсивность которой нарастает по мере развития заболевания. Снижается рост и изменяется осанка (вдовий горб). Потеря роста на 2 см и более в течение 1-3 лет позволяет предположить наличие структурных изменений позвоночника в результате остеопороза.</p>
            </div>

            <div id='card-4' className="card card_gray">
                <p className='card__title'>4. Типы остеопороза</p>
                <p className="card__text"><b>Первичный остеопороз</b> развивается как самостоятельное заболевание, причиной которого может быть изменение гормонального фона в период менопаузы –постменопаузальный остеопороз, а также нарушение функций клеток костной ткани (остеобластов и остеокластов). В последнем случае костная ткань разрушается быстрее, чем синтезируется, – сенильный остеопороз. Сочетание вышеуказанных факторов приводит к комбинированному остеопорозу.</p>
                <p className="card__text"><b>Вторичный остеопороз</b> возникает и развивается на фоне других заболеваний и их лечения, в частности при длительном применении глюкокортикоидов или гормональной терапии эндометриоза и миомы матки. Такие пациентки требуют особого внимания, профилактики, а часто и проведения специальной терапии.</p>
            </div>

            <div id='card-5' className="card">
                <p className='card__title'>5. Диагностика</p>
                <p className="card__text">Все женщины в постменопаузальном периоде должны регулярно проходить обследование на наличие у них остеопороза:</p>
                <ul className='card__list'>
                    <li>сбор анамнеза;</li>
                    <li>физикальный осмотр специалистом (терапевт, ревматолог, эндокринолог, гинеколог);</li>
                    <li>оценка содержания кальция, щелочной фосфатазы в крови (при остеопорозе уровень кальция будет понижен, а щелочной фосфатазы повышен);</li>
                    <li>денситометрия.</li>
                </ul>
                <p className="card__text"><b>Денситометрия </b>– объективный метод диагностики, позволяющий оценить плотность костной ткани. Он применяется как для выявления остеопороза, так и для оценки проводимого лечения. Также для диагностики остеопороза могут использоваться МРТ и КТ.</p>
                <p className="card__text">При отсутствии возможности проведения инструментального исследования диагноз может быть поставлен с использованием FRAX® – инструмента оценки риска перелома ВОЗ.</p>
            </div>

            <div id='card-6' className="card card_gray">
                <p className='card__title'>6. Профилактика и лечение</p>
                <p className="card__text"><b>Остеопороз серьёзное заболевание, но его своевременная диагностика и адекватное лечение позволяют значительно снизить риски возможных осложнений.</b></p>
                <p className="card__text">Профилактику остеопороза необходимо проводить всем женщинам, достигшим периода менопаузы, и тем, у кого есть риск развития вторичного остеопороза.</p>
                <p className="card__text"><b>Основные меры профилактики:</b></p>
                <ul className='card__list'>
                    <li>диета богатая кальцием;</li>
                    <li>физическая активность;</li>
                    <li>коррекция эндокринных нарушений;</li>
                    <li>приём витамина Д и препаратов кальция в виде пищевых добавок.</li>
                </ul>
                <p className="card__text">Если имеют место низкоэнергетические, спонтанные переломы или диагноз подтверждён инструментально, необходим приём специальных препаратов, предназначенных для лечения остеопороза.</p>
            </div>

            <div id='card-7' className="card">
                <p className='card__title'>7. Препараты</p>
                <p className="card__text">В настоящее время имеется целый ряд препаратов, позволяющих эффективно восстанавливать структуру и плотность костной ткани. Их можно разделить на антирезорбтивные и анаболические.</p>
                <p className="card__text"><b>К антирезорбтивным относятся:</b> бисфосфонаты, деносумаб. К анаболическим – аналоги паратиреоидного гормона и ряд других.</p>
                <p className="card__text">Каждый из вышеперечисленных препаратов имеет как достоинства, так и недостатки, и выбор терапии осуществляется с учётом стадии и характера развития заболевания, общего состояния пациента, наличия у него сопутствующих патологий. Наибольшее распространение и признание в лечении остеопороза получили препараты из группы бисфосфонатов. Подавляя резорбцию костной ткани, они способствуют сохранению костной массы и могут вдвое снизить риск переломов позвонков и шейки бедра.</p>
                <p className="card__text">Одним из наиболее эффективных средств нового класса является «Наше лекарство».</p>
            </div>

            <div id='card-8' className="card card_gray">
                <p className='card__title'>8. Побочные эффекты и их устранение </p>
                <p className="card__text">По химической структуре бисфосфонаты сходны с природными неорганическими фосфатами. Они обладают высоким сродством с ионамами кальция, благодаря чему проникают вглубь костной ткани и влияют на её метаболизм.</p>
                <p className="card__text">Бисфосфонаты, как правило, хорошо переносятся, и проявление побочных эффектов во многом зависит от пути их приёма. Например, препараты для орального употребления могут вызывать побочные эффекты со стороны желудочно-кишечного тракта. Их следует применять соблюдая ряд условий, в частности, пациент должен находиться в вертикальном положении в течении часа после приёма – это значительно снижает приверженность лечению.</p>
                <p className="card__text">Препараты с внутривенным путём введения могут вызывать гриппоподобный синдром – кратковременное повышение температуры, ломоту, головную боль. Этот эффект носит кратковременный характер и обычно возникает при первом введении. Для его купирования рекомендуется приём парацетамола в дозе 1000 мг за день до инфузии. Последующие инъекции как правило переносятся гораздо лучше.</p>

                <div className='card__reference'>
                    <img className='card__book' src={book} alt="book"/>
                    <p className='card__reference_top'>Клинические рекомендации по профилактике и ведению больных с остеопорозом. Под редакцией проф. О.М. Лесняк (2012)</p>
                </div>
            </div>

            <div id='card-9' className="card">
                <p className='card__title'>9. Золедронаты</p>
                <p className="card__text">Эффективность бисфосфонатов определяется их строением и путём приёма. При парентеральном приёме биодоступность этих препаратов выше. Наибольшим терапевтическим воздействием среди бисфосфонатов обладает золедроновая кислота или золедронат.</p>
                <p className="card__text"><b>В настоящее время в РФ доступны два золедроната. Это импортный препарат Акласта и российский аналог «Наше лекарство».</b></p>
                <p className="card__text">Сравнительное исследование показало биоэквивалентность и сопоставимую эффективность отечественного дженерика «Наше лекарство» 5 мг и оригинального препарата золедроновой кислоты Акласта<sup>1</sup>. При этом на фоне приёма 'Нашего лекарства' было отмечено меньшее количество проявлений гриппоподобного синдрома.</p>
                <p className="card__text">Следует отметить, что терапевтическая эквивалентность 'Нашего лекарства' подтверждена специальным сравнительным исследованием, при том, что большинство дженериков опираются только на показатели биоэквивалентности.</p>
                <p className="card__text">Кроме того, ценовая доступность 'Нашего лекарства' выше чем у зарубежного аналога, что, безусловно, является важным фактором выбора.</p>

                <div className='card__reference'>
                    <img className='card__book' src={book} alt="book"/>
                    <p className='card__reference_top'>1. Кочиш Ю.А.,Иванов С.Н. Сравнительный анализ эффективности и безопасности использования различных препаратов золедроновой кислоты при лечении пациенток с постменопаузальным остеопорозом, осложнённым компрессионными переломами тел позвонков. ФГБУ «РНИИТО им. Р.Р. Вредена» Минздрава России. 2014.</p>
                </div>

                <div className="pictures">
                    <img src={image} className="pictures__image" alt='item-1' />

                    <div className='pictures_right_upper'>
                        <img src={check} className="pictures__check_upper" alt='check' />
                        <p className='pictures__text'>В рекомендациях по остеопорозу представлена <b>дозировка золедроновой кислоты – 5 мг*</b></p>
                    </div>
                    <div className='pictures_right_lower'>
                        <img src={check} className="pictures__check_lower" alt='check' />
                        <p className='pictures__text'>«Наше лекарство» 5 мг имеет КИ, подтверждающие его терапевтическую эквивалентность оригинальному препарату**</p>
                    </div>

                    <InstructionBtn />

                    <div className='card__reference'>
                        <img className='card__book' src={book} alt="book"/>
                        <p className='card__reference_top'>* Остеопороз. Клинические рекомендации, 2019. <br/>** Анализ клинического опыта применения отечественного дженерика золедроновой кислоты для лечения остеопороза (А.В. Древаль, Л.А. Марченкова и соавт. Анализ клинического опыта применения отечественного дженерика золедроновой кислоты для лечения остеопороза //Лечащий врач. 2014. № 5. С. 124–128.</p>
                    </div>
                </div>
            </div>

            <div id='card-10' className="card card_gray">
                <p className='card__title'>10. Дозировка</p>
                <p className="card__text">Для лечения остеопороза применяется «Наше лекарство» в дозе 5 мг. Дозировка в 4 мг используется в комплексной терапии костных метастазов у онкологических больных<sup>1</sup>.</p>
                <div className='card__reference'>
                    <img className='card__book' src={book} alt="book"/>
                    <p className='card__reference_top'>1. Инструкция к медицинскому применению препарата «Наше лекарство»</p>
                </div>
            </div>

            <div id='card-11' className="card">
                <p className='card__title'>11. Эффективность</p>
                <p className="card__text">Одноразовое введение золедроновой кислоты через 90 дней после лечения перелома бедра и её последующее ежегодное применение ведёт к укреплению костной ткани, снижает риск развития новых переломов на 35%, улучшает общее состояние больных, снижает риск развития инвалидизации и смерти<sup>1</sup>.</p>
                <p className="card__text"><b>Средний прирост минеральной плотности костной ткани (МПК ) через 12 месяцев лечения составляет:</b></p>
                <ul className='card__list'>
                    <li>в поясничных позвонках – 5,3±2,1%</li>
                    <li>в проксимальном отделе бедренной кости – 2,1±0,9 %2.</li>
                </ul>
                <div className='card__reference'>
                    <img className='card__book' src={book} alt="book"/>
                    <p className='card__reference_top'>1. Клинические рекомендации, Остеопороз. Диагностика, профилактика и лечение. Под ред. Лесняк О.М., Беневоленской Л.И. 2012 год <br/>2. Журнал «Фарматека» – сравнительное исследование эффективности отечественного дженерика и оригинального препарата золедроновой кислоты у пациенток с низкоэнергетическими переломами тел позвонков и постменопаузальным остеопорозом» под ред. А.Ю. Кочиш, С.Н. Иванов – 2014 год</p>
                </div>
            </div>

            <div id='card-12' className="card card_gray">
                <p className='card__title'>12. Длительность лечения</p>
                <p className="card__text">В случае своевременного начала лечения и приверженности ему можно достичь очень хороших результатов. «Средняя длительность лечения остеопороза бисфосфонатами составляет 3-5 лет, однако больные с высоким риском переломов должны продолжить лечение свыше 5 лет».<sup>1</sup></p>
                <div className='card__reference'>
                    <img className='card__book' src={book} alt="book"/>
                    <p className='card__reference_top'>1. Клинические рекомендации по профилактике и ведению больных с остеопорозом. Под редакцией проф. О.М. Лесняк (2012)</p>
                </div>
            </div>

            <div id='card-13' className="card">
                <p className='card__title'>13. Удобство использования</p>
                <p className="card__text">Выбор препарата по удобству использования индивидуален для каждого пациента. При назначении терапии необходимо учитывать возраст и социальное положение больного, образ жизни, наличие сопутствующих заболеваний и настроенность на достижение результатов. Так, неудобные схемы приёма во многом способны снизить приверженность пациентов назначенной терапии.</p>
                <p className="card__text">Наиболее удобным можно считать препарат, применяемый один раз в год, не требующий госпитализации для проведения инфузии. Такая схема приёма оптимальна для большинства пациентов и обеспечивает высокую приверженность лечению.</p>
                <p className="card__text"><b>Золедронаты в полной мере относятся к препаратам именно с такой, наиболее удобной схемой приёма.</b></p>
            </div>
        </div>
    )
};

export default MainContent;
