import React from 'react';
import s from './Contacts.module.scss';
import {TitleCustom} from '../../common/com-components/TitleCustom/TitleCustom';
import {useAppDispatch, useAppSelector} from "../../store/store";
import {ContactForm} from "./ContactForm";

export const Contacts = () => {

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector<boolean>(state => state.form.isLoading);

  return (
    <div id={'Contacts'} className={s.contactsContainer}>
      <TitleCustom title={'Contacts'} costumeStyle={s.title}/>
      <div className={s.contactsItem}>
        <ContactForm/>
      </div>
    </div>
  );
};

