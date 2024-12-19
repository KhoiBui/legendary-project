import { styled } from 'styled-components';
import { useState, FormEvent } from 'react';

const DonateFormContainer = styled.div`
  padding: 40px;
  width: 100%;
  max-width: 400px;
  background-color: #9aaeb854;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    margin: 0;
    text-align: left;
    color: #333;

    &:first-of-type {
      font-size: 32px;
      margin-bottom: 0px;
    }

    &:nth-of-type(2) {
      font-size: 20px;
      margin-bottom: 32px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-weight: 500;
    color: #444;
  }

  input,
  textarea {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
    transition: border-color 0.2s ease;
    background-color: white;
    color: black;

    &:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
    }
  }

  textarea {
    min-height: 100px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 14px 28px;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 16px;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    transform: translateY(1px);
  }
`;

interface FormFields {
  email?: string;
  amount?: number;
  firstName?: string;
  lastName?: string;
  notes?: string;
}

export const DonateForm = () => {
  const [formFields, setFormFields] = useState<FormFields>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formFields);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <DonateFormContainer>
      <h2>DONATE NOW</h2>
      <h2>Help us make a difference</h2>
      <form onSubmit={handleSubmit}>
        <FormInput>
          <label htmlFor='firstName'>First Name</label>
          <input
            name='firstName'
            type='text'
            value={formFields.firstName || ''}
            onChange={handleInputChange}
          />
        </FormInput>

        <FormInput>
          <label htmlFor='lastName'>Last Name</label>
          <input
            name='lastName'
            type='text'
            value={formFields.lastName || ''}
            onChange={handleInputChange}
          />
        </FormInput>

        <FormInput>
          <label htmlFor='email'>
            Email{' '}
            <span
              style={{
                color: 'red',
                fontSize: '16px',
                fontWeight: 700,
              }}
            >
              *
            </span>
          </label>
          <input
            name='email'
            type='email'
            value={formFields.email || ''}
            onChange={handleInputChange}
            required
          />
        </FormInput>

        <FormInput>
          <label htmlFor='amount'>
            Donation Amount ($){' '}
            <span
              style={{
                color: 'red',
                fontSize: '16px',
                fontWeight: 700,
              }}
            >
              *
            </span>
          </label>
          <input
            name='amount'
            type='number'
            min='1'
            step='1'
            value={formFields.amount || ''}
            onChange={handleInputChange}
            required
          />
        </FormInput>

        <FormInput>
          <label htmlFor='notes'>Notes (Optional)</label>
          <textarea
            name='notes'
            value={formFields.notes || ''}
            onChange={handleInputChange}
          />
        </FormInput>

        <SubmitButton type='submit'>Donate Now</SubmitButton>
      </form>
    </DonateFormContainer>
  );
};
