class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return React.createElement('div', { className: 'alert alert-danger m-3' }, 'Error al cargar los componentes');
    }
    return this.props.children;
  }
}

function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(MachinerySection, null),
    React.createElement(ServicesSection, null),
    React.createElement(ContactSection, null),
    React.createElement(Footer, null)
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  React.createElement(ErrorBoundary, null, React.createElement(App, null))
);

setTimeout(() => {
  AOS.init({
    duration: 850,
    once: true,
    offset: 80,
    disable: function() {
      return window.innerWidth < 768;
    }
  });
}, 100);
