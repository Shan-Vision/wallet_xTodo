import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { useState } from 'react';
import {
  FiltersContainer,
  CustomPicker,
  FiltersSelect,
  FilterDescription,
} from './Filters.styled';
import { TfiAngleDown } from 'react-icons/tfi';
import { useTranslation } from 'react-i18next';
import '../../utils/i18next';
import { theme } from '../../styleConfig/theme';

export const Filters = ({ getYearStatistic, getMonthStatistic }) => {
  const { t } = useTranslation();
  const [month, setMonth] = useState('');
  const [year, setYear] = useState(dayjs('2022', 'YYYY'));

  const monthPickerHandler = value => {
    if (value) {
      setMonth(value);
      setYear('');
      const data = value.format('MM YYYY').split(' ');
      const reversedData = `${data[1]}-${data[0]}`;
      getMonthStatistic(reversedData);
    }
  };

  const yearPickerHandler = value => {
    if (value) {
      setMonth('');
      setYear(value);
      const data = value.format('YYYY');
      getYearStatistic(data);
    }
  };

  return (
    <FiltersContainer>
      <FilterDescription>
        {t('statisticTable.FilterDescription')}
      </FilterDescription>
      <FiltersSelect>
        <CustomPicker
          suffixIcon={<TfiAngleDown size="18px" color={theme.colors.black} />}
          picker="month"
          format={'MMMM YYYY'}
          value={month}
          onChange={monthPickerHandler}
          placeholder={t('statisticTable.FilterMonth')}
        />
        <CustomPicker
          suffixIcon={<TfiAngleDown size="18px" color={theme.colors.black} />}
          picker="year"
          format={'YYYY'}
          value={year}
          onChange={yearPickerHandler}
          placeholder="Year"
        />
      </FiltersSelect>
    </FiltersContainer>
  );
};

Filters.propTypes = {
  getYearStatistic: PropTypes.func.isRequired,
  getMonthStatistic: PropTypes.func.isRequired,
};
