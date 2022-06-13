import React from 'react';
import s from './Contacts.module.scss';
import {TitleCustom} from '../../common/com-components/TitleCustom/TitleCustom';
import {InputText} from "../../common/com-components/InputText/InputText";
import {Button} from "../../common/com-components/Button/Button";

export const Contacts = () => {
  const sendHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    alert('Send...')
  }
  return (
    <div id={'Contacts'} className={s.contactsContainer}>
      <TitleCustom title={'Contacts'} costumeStyle={s.title}/>
      <div className={s.contactsItem}>
        <form>
          <div className={s.inputBlock}>
            <InputText placeholder={'Name'}/>
            <InputText style={{marginLeft: '10px'}} placeholder={'Email'}/>
          </div>
          <div className={s.blockTextArea}>
            <textarea className={s.textArea} rows={8} placeholder={'Your Message'}/>
          </div>
          <div className={s.buttonBlock}>
            <Button onClick={sendHandler}>Send</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

