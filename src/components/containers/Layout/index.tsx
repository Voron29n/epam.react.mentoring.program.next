import { ErrorBoundary, FilterBar, Lightbox, MovieList } from 'components';
import { useLightboxContext } from 'hooks';

interface ILayout {
  children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: ILayout) => {
  const {
    state: { lightbox }
  } = useLightboxContext();

  return (
    <div id='root'>
      {children}
      <FilterBar />
      <ErrorBoundary>
        <MovieList />
      </ErrorBoundary>
      {!!lightbox && <Lightbox {...lightbox} />}
    </div>
  );
};
