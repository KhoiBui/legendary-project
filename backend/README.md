## Prerequisites

- C++17
- CMake 3.10+
- Homebrew
- PostgreSQL
- automake
- autoconf
- autoconf-archive
- vcpkg
- libtool
- dbmate (for migrations)

## Installation

### Xcode Command Line Tools

```sh
xcode-select --install
```

### Project Dependencies

```sh
brew install cmake gcc libtool autoconf autoconf-archive postgresql dbmate
```

### Environment Setup

1. Copy the example environment file:

```sh
cp .env.example .env
```

2. Edit the .env file with your database configuration if needed.

### Database Setup

1. Start PostgreSQL:

```sh
docker compose up -d
```

2. Run database migrations:

```sh
dbmate up
```

The database will be available at:

- Host: localhost
- Port: 5432
- Database: vnhope
- Username: vnhope

### Database Commands

```sh
# Apply all pending migrations
dbmate up

# Roll back the last migration
dbmate down

# Create a new migration
dbmate new migration_name

# Show current migration status
dbmate status
```

## Build

```sh
mkdir build
cd build
cmake ..
make
```

## Running

1. Ensure the PostgreSQL database is running
2. Run the server:

```sh
./api_server
```

## Quick Start

To start everything (database, migrations, and API) with a single command:

```sh
docker compose up
```

This will:
1. Start PostgreSQL
2. Run database migrations
3. Build and start the API server
