import React from 'react';
import s from './Contacts.module.scss';
import {TitleCustom} from '../../common/com-components/TitleCustom/TitleCustom';
import {InputText} from "../../common/com-components/InputText/InputText";

export const Contacts = () => {
  return (
    <div id={'Contacts'} className={s.contactsContainer}>
      <TitleCustom title={'Contacts'} hLevel={2} costumeStyle={s.title}/>
      <div className={s.contactsItem}>
        <form>
          <div className={s.inputBlock}>
            <InputText placeholder={'name...'}/>
            <InputText placeholder={'@mail...'}/>
          </div>
          <textarea placeholder={'message text...'}/>
        </form>
        <button>Send</button>
      </div>
    </div>
  );
};

