import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../router/routes';

export const useNavigation = () => {
  const navigate = useNavigate();

  const navigateTo = {
    home: () => navigate(ROUTES.HOME),
    back: () => navigate(-1),
    forward: () => navigate(1),
    replace: (path) => navigate(path, { replace: true }),
  };

  return {
    navigate,
    navigateTo,
    ROUTES,
  };
};

export default useNavigation; 