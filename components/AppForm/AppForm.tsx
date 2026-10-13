import React, { lazy } from 'react';
// import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import styles from './AppForm.module.scss';

// @ts-ignore
const AlertBanner = lazy(() => import('@/components/AlertBanner/AlertBanner'));

type AppFormProps = {
  formData: {}[];
  formRef?: React.Ref<HTMLFormElement> | undefined;
  isDarkMode?: boolean;
  click?: (event: React.SyntheticEvent) => void;
};
function AppForm({ formData, click, formRef, isDarkMode }: AppFormProps) {
  /* strip HTML tags from input values */
  const stripHtmlTags = (str: string) => str?.replace(/<\/?[^>]+(>|$)/g, '');

  let input;
  if (formData) {
    input = formData.map((d: any) => {
      if (d.inputType === 'checkbox') {
        return (
          <FormControlLabel
            key={`label-${d.name}`}
            control={
              <Checkbox
                name={d.name}
                size="medium"
                checked={d.inputVal}
                onChange={d.change}
              />
            }
            labelPlacement="start"
            label={d.labelText}
          />
        );
      }
      if (d.inputType === 'radio') {
        return (
          <RadioGroup
            key={`radios-${d.name}`}
            row
            aria-labelledby={`radios-${d.name}-group`}
            name={d.name}
            value={d.inputVal}
            onChange={d.change}
            sx={{ margin: '.5rem 0' }}
          >
            <FormControlLabel
              labelPlacement="start"
              value="left"
              control={<Radio />}
              label="Left"
            />
            <FormControlLabel
              labelPlacement="start"
              value="center"
              control={<Radio />}
              label="Center"
            />
            <FormControlLabel
              labelPlacement="start"
              value="right"
              control={<Radio />}
              label="Right"
            />
          </RadioGroup>
        );
      }
      if (d.inputType === 'color') {
        return (
          <div key={`color-${d.name}`} className="relative">
            <label
              className="absolute -top-1.75 bg-white px-0.5 text-gray-500 left-2 text-xs"
              htmlFor={`outlined-${d.name}`}
            >
              {d.labelText}
            </label>
            <input
              type="color"
              key={`textinput-${d.name}`}
              id={`outlined-${d.name}`}
              value={d.inputVal}
              onChange={d.change}
              name={d.name}
              className="border border-gray-300 rounded-md p-2 text-sm w-full h-10 mb-4 hover:border-gray-900"
            />
          </div>
        );
      }
      return (
        <div key={`text-${d.name}`} className="relative">
          <label
            className="absolute -top-1.75 bg-white px-0.5 text-gray-500 left-2 text-xs"
            htmlFor={`outlined-${d.name}`}
          >
            {d.labelText}
          </label>
          <input
            type="text"
            key={`textinput-${d.name}`}
            id={`outlined-${d.name}`}
            value={stripHtmlTags(d.inputVal)}
            onChange={d.change}
            name={d.name}
            className="border border-gray-300 rounded-md p-2 text-sm w-full mb-4 hover:border-gray-900"
          />
        </div>
      );
    });
  }

  return formData ? (
    <form
      ref={formRef}
      onSubmit={click}
      className={`${styles.AppForm} ${isDarkMode ? styles.Dark : ''}`}
    >
      <div className={`${styles.FormInputs} pt-2`}>{input}</div>
      <Button
        sx={{ borderRadius: '25px', mt: 'auto', mb: '2.5rem' }}
        type="submit"
        color="secondary"
        variant="contained"
      >
        Save
      </Button>
    </form>
  ) : (
    <AlertBanner>
      Please add&nbsp;
      <b>form setup </b>
      data...
    </AlertBanner>
  );
}

export default AppForm;
