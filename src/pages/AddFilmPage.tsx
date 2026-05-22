import AddFilmForm from '@/components/AddFilmForm';

const AddFilmPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        Přidat film
      </h1>
      <AddFilmForm />
    </div>
  );
};

export default AddFilmPage;
