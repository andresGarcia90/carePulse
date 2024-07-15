import { E164Number } from "libphonenumber-js/core";
import { Control } from "react-hook-form"
import Image from "next/image";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import ReactDatePicker from "react-datepicker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { FormFieldType } from "../lib/Type"
import { Input } from "./ui/input";
import "react-datepicker/dist/react-datepicker.css";
import { Textarea } from "./ui/textarea";


interface CustomProps {
  control: Control<any>,
  fieldType: FormFieldType,
  name: string,
  label?: string,
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}


const RenderInput = ({field, props} : {field: any, props: CustomProps}) => {
  const {fieldType, iconSrc, iconAlt, placeholder, showTimeSelect, dateFormat, children, renderSkeleton} = props
  switch (fieldType) {
    case FormFieldType.INPUT:
      return(
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {iconSrc && (
            <Image
              src={iconSrc}
              height={24}
              width={24}
              alt={iconAlt || "icon"}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className="shad-input border-0"
            />
          </FormControl>
        </div>
      )
    case FormFieldType.PHONE_INPUT:
      return(
        <FormControl>
          <PhoneInput
            defaultCountry="AR"
            placeholder={placeholder}
            international
            withCountryCallingCode
            value={field.value as E164Number | undefined}
            onChange={field.onChange}
            className="input-phone" 
            />
        </FormControl>
      )
    case FormFieldType.DATE_PICKER:
      return(
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          <Image
            src="/assets/icons/calendar.svg"
            height={24}
            width={24}
            alt="user"
            className="ml-2"
          />
          <FormControl>
            <ReactDatePicker
                showTimeSelect={showTimeSelect ?? false}
                selected={field.value}
                onChange={(date: any) => field.onChange(date)}
                timeInputLabel="Time:"
                dateFormat={dateFormat ?? "dd/MM/yyyy"}
                wrapperClassName="date-picker"
            />
          </FormControl>
        </div>
      )
    case FormFieldType.SKELETON:
      return renderSkeleton ? renderSkeleton(field) : null
    case FormFieldType.SELECT:
      return(
        <FormControl>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
          {/* <FormControl> */}
              <SelectTrigger className="shad-select-trigger">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            {/* </FormControl> */}
            <SelectContent className="shad-select-content">
              {children}
            </SelectContent>
          </Select>
        </FormControl>
      )
    case FormFieldType.TEXTAREA:
      return(
        <FormControl>
          <Textarea
            placeholder={placeholder}
            {...field}
            className="shad-input border-0"
          />

        </FormControl>
      )
    default:
      break;
  }
}






const CustomFormField = (props: CustomProps) => {
  const { control, name, label } = props;
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="flex-1">
          {props.fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel className="shad-input-label">{label}</FormLabel>
          )}
          <RenderInput field={field} props={props} />

          <FormMessage className="shad-error" />
        </FormItem>
        )}
      />
  )
}

export default CustomFormField