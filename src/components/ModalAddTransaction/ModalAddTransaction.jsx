import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import '../../utils/i18next';
import { Formik, Field } from 'formik';
import { FormError } from '../AuthForm/FormError';
import * as yup from 'yup';
import moment from 'moment';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import Media from 'react-media';
import Select from 'react-select';
import { selectStyles } from './SelectStyles';
import PropTypes from 'prop-types';
import {
  Overlay,
  ModalWindow,
  CloseButton,
  Title,
  StyledForm,
  InputBox,
  InputWrapper,
  InputCategory,
  InputAmount,
  InputDate,
  CalendarIcon,
  InputComment,
  PrimaryButton,
  SecondaryButton,
} from './ModalAddTransaction.styled';
import {
  Switcher,
  SwitchBox,
  Switch,
  StyledButton,
  Income,
  Expense,
} from './TypeSwitcher.styled';
import { PlusOutlined, MinusOutlined, DownOutlined } from '@ant-design/icons';

import {
  addTransaction,
  categoriesSelectors,
  getCategories,
} from '../../redux';
import './rdt-styles.css';

const modalRoot = document.getElementById('modal-root');

const transactionSchema = yup.object().shape({
  sum: yup
    .number()
    .positive('Sum must be a positive number')
    .required('Sum is a required field'),
  category: yup.string().required('Choose category'),
  comment: yup.string(),
  date: yup
    .date()
    .max(moment().add(1, 'hour'), `Date should be today or earlier`)
    .default(() => new Date())
    .required(),
  type: yup.string().required(),
});

const ModalAddTransaction = ({ onClose }) => {
  const [sum, setSum] = useState();
  const [comment, setComment] = useState();
  const [category, setCategory] = useState();
  const [typeTransaction, setTypeTransaction] = useState('expense');
  const { t } = useTranslation();

  const initialValues = {
    sum: '',
    category: '',
    comment: '',
    date: new Date(),
    type: false,
  };

  const dispatch = useDispatch();

  const categories = useSelector(categoriesSelectors.getCategories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'sum':
        setSum(value);
        break;

      case 'category':
        setCategory(value);
        break;

      case 'comment':
        setComment(value);
        break;

      default:
        break;
    }
  };

  const handleIncome = e => {
    if (e.target.checked === true) {
      return setTypeTransaction('income');
    }
    setTypeTransaction('expense');
  };

  const handleSubmit = ({ sum, category, comment, date }, { resetForm }) => {
    dispatch(
      addTransaction({
        sum,
        category,
        comment,
        date,
        type: typeTransaction,
      })
    );

    onClose();
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const validDate = chosenDate => {
    return chosenDate.isBefore(moment(new Date()));
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <Media
          query="(min-width: 768px)"
          render={() => <CloseButton onClick={() => onClose()} />}
        />

        <Title>{t('ModalAdd.Category')}</Title>

        <Formik
          initialValues={initialValues}
          validationSchema={transactionSchema}
          onSubmit={handleSubmit}
          onChange={handleChange}
        >
          {({ setFieldValue, touched, errors }) => (
            <StyledForm autoComplete="off">
              <Switcher>
                <Income checked={typeTransaction === 'income'}>
                  {t('ModalAdd.income')}
                </Income>

                <SwitchBox>
                  <label htmlFor="type">
                    <Switch
                      name="type"
                      type="checkbox"
                      id="type"
                      onClick={e => handleIncome(e)}
                    />
                    {typeTransaction === 'income' ? (
                      <StyledButton checked={typeTransaction === 'income'}>
                        <PlusOutlined style={{ fontSize: '22px' }} />
                      </StyledButton>
                    ) : (
                      <StyledButton>
                        <MinusOutlined style={{ fontSize: '22px' }} />
                      </StyledButton>
                    )}
                  </label>
                </SwitchBox>

                <Expense checked={typeTransaction === 'expense'}>
                  {t('ModalAdd.expense')}
                </Expense>
              </Switcher>

              <InputBox>
                <InputCategory>
                  <Select
                    name="category"
                    key={typeTransaction}
                    components={<DownOutlined />}
                    options={categories
                      .filter(elem => elem.type === typeTransaction)
                      .map(({ name, id }) => ({
                        value: id,
                        label: [t(`categoryName.${name}`)],
                      }))}
                    styles={selectStyles(typeTransaction)}
                    placeholder={t('ModalAdd.Category')}
                    value={category}
                    onChange={option => {
                      setFieldValue('category', option.value);
                    }}
                    isSearchable={false}
                  />
                  {touched.category && errors.category && (
                    <FormError name="category" />
                  )}
                </InputCategory>

                <InputWrapper>
                  <label htmlFor="sum" />
                  <InputAmount
                    name="sum"
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={sum}
                    placeholder="0.00"
                  />
                  {touched.sum && errors.sum && <FormError name="sum" />}
                </InputWrapper>

                <InputWrapper>
                  <label htmlFor="date" />
                  <InputDate>
                    <Field name="date">
                      {({ field, form: { isSubmitting } }) => (
                        <Datetime
                          dateFormat="DD.MM.YYYY"
                          timeFormat={false}
                          initialValue={new Date()}
                          onChange={date => {
                            setFieldValue('date', date);
                          }}
                          isValidDate={validDate}
                          input={true}
                          closeOnSelect
                        />
                      )}
                    </Field>

                    <CalendarIcon />
                  </InputDate>
                  {touched.date && errors.date && <FormError name="date" />}
                </InputWrapper>

                <InputWrapper>
                  <label htmlFor="comment" />
                  <Field
                    name="comment"
                    value={comment}
                    placeholder={t('ModalAdd.placeholderComent')}
                    as={InputComment}
                    maxLength={30}
                  />
                </InputWrapper>
              </InputBox>

              <PrimaryButton type="primary" htmlType="submit">
                {t('ModalAdd.ButtonAdd')}
              </PrimaryButton>

              <SecondaryButton htmlType="button" onClick={() => onClose()}>
                {t('ModalAdd.ButtonCensel')}
              </SecondaryButton>
            </StyledForm>
          )}
        </Formik>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

export default ModalAddTransaction;

ModalAddTransaction.propTypes = {
  onClose: PropTypes.func.isRequired,
};
