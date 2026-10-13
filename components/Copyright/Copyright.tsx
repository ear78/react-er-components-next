export default function copyright() {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <div data-testid="copyright-component" className="flex justify-center text-xs">
      <p>
        All Rights Reserved Elliot Richardson &copy;
        {' '}
        {year}
      </p>
    </div>
  );
};
