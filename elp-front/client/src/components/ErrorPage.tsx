import * as React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const centered = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};
export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);

  return (
    <main style={centered}>
      <Card className="text-center w-50" bg="warning" key="Warning" text="dark">
        <Card.Header>Oops!</Card.Header>
        <Card.Body>
          <Card.Title>Sorry, an unexpected error has occurred.</Card.Title>
          <Card.Text>
            {error instanceof Error && (
              <p>
                <i>{error.message}</i>
              </p>
            )}
          </Card.Text>
          <Button
            variant="secondary"
            onClick={() => navigate('/')}
          >
            Back to Homepage
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">How embarassing...</Card.Footer>
      </Card>
    </main>
  );
}
