import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import flightValidation from '../flightValidation';

const FlightForm = () => {
  const [message, setMessage] = useState('');
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(flightValidation),
  });

  const onSubmit = (data) => {
    setMessage('Все ок');
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <div>
          <label>Відправлення</label>
          <input type="text" {...register('from')} placeholder="Введіть місце відправлення" />
          {errors.from && <p className="error">{errors.from.message}</p>}
        </div>

        <div>
          <label>Прибуття</label>
          <input type="text" {...register('to')} placeholder="Введіть місце прибуття" />
          {errors.to && <p className="error">{errors.to.message}</p>}
        </div>

        <div>
          <label>Дата вильоту</label>
          <input type="date" {...register('departureDate')} />
          {errors.departureDate && <p className="error">{errors.departureDate.message}</p>}
        </div>

        <div>
          <label>Дата повернення</label>
          <input type="date" {...register('returnDate')} />
          {errors.returnDate && <p className="error">{errors.returnDate.message}</p>}
        </div>

        <button type="submit">Оформити замовлення</button>
      </form>
      {message && <p className="success">{message}</p>}  {}
    </div>
  );
};

export default FlightForm;
