export default function ContactPage() {
  return (
    <main className='max-w-xl mx-auto px-6 py-20 space-y-8'>
      <h1 className='text-3xl font-semibold'>Schedule a Tour</h1>

      <p className='text-slate-600'>
        Complete the form below and our office will contact you shortly.
      </p>

      <form className='space-y-4'>
        <input
          type='text'
          placeholder='Your Name'
          className='w-full border rounded-md p-3'
        />
        <input
          type='email'
          placeholder='Email Address'
          className='w-full border rounded-md p-3'
        />
        <textarea
          placeholder='Tell us about your child'
          className='w-full border rounded-md p-3'
          rows={4}
        />
        <button
          type='submit'
          className='bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700'
        >
          Submit Request
        </button>
      </form>
    </main>
  );
}
