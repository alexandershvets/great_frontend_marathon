import Spinner from '../components/spinner/Spinner';
import ErrorMessage from '../components/errorMessage/ErrorMessage';

export function setContent(process, Component, data) {
  switch (process) {
    case 'idle':
      return <Spinner />
    case 'loading':
      return <Spinner />
    case 'completed':
      return <Component data={data} />
    case 'error':
      return <ErrorMessage />
    default:
      throw new Error('Unexpected process state');
  }
}
