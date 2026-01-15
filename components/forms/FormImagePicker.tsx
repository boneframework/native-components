import React from 'react';
import {View} from 'react-native';
import {useFormikContext} from 'formik';

import ErrorMessage from './ErrorMessage';
import ImageInputList from '../ImageInputList';

interface Props {
  name: string;
}

const FormImagePicker: React.FC<Props> = ({ name }) => {
  const { setFieldValue, touched, values, errors } = useFormikContext<any>();
  const imageUris: string[] = values[name] || [];

  const handleAdd = (uri: string) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri: string) => {
    setFieldValue(name, imageUris.filter(imageUri => imageUri !== uri));
  };

  return (
    <View>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors ? errors[name] : undefined} visible={touched ? touched[name] : false} />
    </View>
  );
};

export default FormImagePicker;
