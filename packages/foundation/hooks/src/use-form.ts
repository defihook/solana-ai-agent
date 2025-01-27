import { useState, useCallback } from 'react'
import { z } from 'zod'

interface UseFormOptions<T> {
  initialValues: T
  validationSchema?: z.ZodType<T>
  onSubmit: (values: T) => void | Promise<void>
}

export function useForm<T extends Record<string, any>>({
  initialValues,
  validationSchema,
  onSubmit,
}: UseFormOptions<T>) {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = useCallback(
    (name: keyof T) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value
      setValues(prev => ({ ...prev, [name]: value }))
      
      if (validationSchema) {
        try {
          validationSchema.parse(values)
          setErrors(prev => ({ ...prev, [name]: undefined }))
        } catch (error) {
          if (error instanceof z.ZodError) {
            const fieldError = error.errors.find(err => err.path[0] === name)
            if (fieldError) {
              setErrors(prev => ({ ...prev, [name]: fieldError.message }))
            }
          }
        }
      }
    },
    [values, validationSchema]
  )

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault()
      setIsSubmitting(true)

      try {
        if (validationSchema) {
          validationSchema.parse(values)
        }
        await onSubmit(values)
      } catch (error) {
        if (error instanceof z.ZodError) {
          const newErrors = error.errors.reduce(
            (acc, curr) => ({
              ...acc,
              [curr.path[0]]: curr.message,
            }),
            {}
          )
          setErrors(newErrors)
        }
      } finally {
        setIsSubmitting(false)
      }
    },
    [values, validationSchema, onSubmit]
  )

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    reset: () => {
      setValues(initialValues)
      setErrors({})
    },
  }
} 