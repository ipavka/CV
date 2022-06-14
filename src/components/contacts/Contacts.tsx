import React, {useState} from 'react';
import s from './Contacts.module.scss';
import {TitleCustom} from '../../common/com-components/TitleCustom/TitleCustom';
import {InputText} from "../../common/com-components/InputText/InputText";
import {Button} from "../../common/com-components/Button/Button";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {sendDataTC} from "../../store/form-reducer";
import {formsAPI} from "../../store/api";

export const Contacts = () => {

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector<boolean>(state => state.form.isLoading);

  const [data, setData] = useState<any>(null);
  const [value, setValue] = useState('');

  const sendHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // dispatch(sendDataTC());
    formsAPI.checkedPhoneNumber(value)
      .then(res => {
        setData(res)
      })
  }
  return (
    <div id={'Contacts'} className={s.contactsContainer}>
      <TitleCustom title={'Contacts'} costumeStyle={s.title}/>
      <div className={s.contactsItem}>
        <form>
          <div className={s.inputBlock}>
            <InputText placeholder={'Name'} value={value} onChangeText={setValue}/>
            <InputText style={{marginLeft: '10px'}} placeholder={'Email'}/>
          </div>
          <div className={s.blockTextArea}>
            <textarea className={s.textArea} rows={8} placeholder={'Your Message'}/>
          </div>
          <div className={s.buttonBlock}>
            <Button onClick={sendHandler} isSpinner={isLoading}>Send</Button>
            <div className={s.infoDiv}>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

