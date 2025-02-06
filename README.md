## Características Principales

### Panel de Administración
- Acceso: `/admin`
- Credenciales de administrador:
  - Email: damianadmin@jmh.com
  - Contraseña: DamianAdmin123

### Gestión de Productos
- CRUD completo de productos
- Gestión de stock
- Imágenes y descripciones

### Gestión de Pedidos
- Seguimiento de pedidos
- Estados de pedido
- Historial de compras

### Panel de Usuario
- Registro y login
- Historial de pedidos
- Perfil de usuario

## API Endpoints

### Autenticación
- POST `/api/auth/login`
- POST `/api/auth/register`

### Productos
- GET `/api/products`
- GET `/api/products/:id`
- POST `/api/products`
- PUT `/api/products/:id`
- DELETE `/api/products/:id`

### Pedidos
- GET `/api/orders`
- POST `/api/orders`
- PATCH `/api/orders/:id`

### Usuarios
- GET `/api/users/profile`
- PUT `/api/users/profile`
- GET `/api/users/addresses`

## Flujo de Compra

1. El usuario navega por los productos
2. Agrega productos al carrito
3. Procede al checkout
4. Se genera una orden
5. Se envía confirmación por WhatsApp
6. El admin puede gestionar la orden

## Desarrollo

### Scripts Disponibles
