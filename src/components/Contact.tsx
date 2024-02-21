import { useForm, ValidationError } from '@formspree/react';

export function ContactForm() {
  const [state, handleSubmit, reset] = useForm(
    import.meta.env.PUBLIC_FORMSPREE_KEY,
  );

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
      <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Nombre
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="mt-2.5">
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Mensaje
          </label>
          <div className="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows={4}
              className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div
          className="g-recaptcha"
          data-sitekey={import.meta.env.SECRET_KEY_CAPTCHA}
        ></div>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          disabled={state.submitting}
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Enviar
        </button>
      </div>
      {state.succeeded && (
        <div className="mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" fill-none inline stroke-green-500 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <p className="inline">
            {' '}
            Gracias, te contactaremos lo más pronto posible!
          </p>
        </div>
      )}
      {state.errors &&
        state.errors.getAllFieldErrors().map((error) => {
          console.log(state.errors);
          return (
            <>
              <p>{error[0]}</p>
              <p>{error[1].toString()}</p>
            </>
          );
        })}
    </form>
  );
}
