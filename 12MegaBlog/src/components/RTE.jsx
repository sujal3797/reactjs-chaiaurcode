import React from 'react'
import {Editor} from '@tinymce/tinymce-react';
import {Controller} from 'react-hook-form'

export default function RTE({name, control, label, defaultValue=""}) {
  return (
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1'>
        {label}</label>}

    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
    <Editor
    apiKey='329zrtbiupu2x6hbgk3igj0o32yabl46u9wb55s01t2xtkcq'
    initialValue={defaultValue}
    init={
        {
            // branding: false,
            height: 500,
            menubar: true,
            plugins:
                'advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table code help wordcount',
            toolbar: 
                'undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help',
            content_style: 'body {font-family:Helvetica, Arial, sans-serif, font-sizer:14px'

        }
    }
    onEditorChange={onChange}
    />
    )}
    />
    </div>
  )
}

