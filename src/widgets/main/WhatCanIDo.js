import React from 'react';
import styled from "styled-components";
import TitleCanIDO from "./TitleCanIDO";
import TextCanIDo from "./TextCanIDo";

const WhatCanIDo = () => {


  return (
    <WhatCanIDoWr>
      <TitleCanIDO firstRow={'Web'} secondRow={'devolpment'}/>
      <TextCanIDo
        row1={`Мои интересы в сфере разработки сосредоточены на нескольких `}
        row2={`узкоспециализированных технологиях, которые я активно изучаю и применяю `}
        row3={`в своей работе. Среди них React, React.Native и Next.js - это популярные фреймворки `}
        row4={`и библиотеки, которые я использую для создания веб- и мобильных приложений.`}
      />
      <TitleCanIDO firstRow={'Database'} secondRow={'developer'}/>
      <TextCanIDo
        row1={`Моя специализация в области баз данных сосредоточена на реляционных`}
        row2={`базах данных, таких как MySql и PostgreSql. Это позволяет мне успешно проектировать,`}
        row3={`создавать и управлять данными в разнообразных проектах. Я активно изучаю и применяю `}
        row4={`эти технологии для обеспечения эффективности работы с данными в моих проектах.`}
      />
      <TitleCanIDO firstRow={'And'} secondRow={'more'}/>
      <TextCanIDo
        row1={`Меня привлекает работа с платформой .NET и инструментом Windows.Forms`}
        row2={`для разработки приложений под операционную систему Windows.`}
        row3={`Я углубленно изучаю эти технологии и применяю свою экспертизу для создания `}
        row4={`качественных приложений, которые эффективно функционируют в среде Windows.`}
      />
    </WhatCanIDoWr>
  );
};

const WhatCanIDoWr = styled.div`
  display: block;
  position: relative;
  padding: 0 5vw;
  width: 100%;
  
  top: 0;

  //background-color: #2c2c2c;
`

export default WhatCanIDo;