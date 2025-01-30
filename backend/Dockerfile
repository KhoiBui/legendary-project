FROM ubuntu:22.04 AS build

# Prevent interactive prompts during package installation
ENV DEBIAN_FRONTEND=noninteractive

# Install dependencies
RUN apt-get update && apt-get install -y \
  clang \
  cmake \
  ninja-build \
  libboost-all-dev \
  libasio-dev \
  postgresql-server-dev-all \
  make \
  git \
  build-essential \
  pkg-config \
  && rm -rf /var/lib/apt/lists/*

# Set compiler paths explicitly
ENV CC=/usr/bin/clang
ENV CXX=/usr/bin/clang++
ENV CMAKE_MAKE_PROGRAM=/usr/bin/ninja

# Install Crow
RUN git clone https://github.com/CrowCpp/Crow.git && \
  cd Crow && \
  mkdir build && \
  cd build && \
  cmake .. && \
  make install && \
  cd ../.. && \
  rm -rf Crow

# Install libpqxx
RUN git clone https://github.com/jtv/libpqxx.git && \
  cd libpqxx && \
  mkdir build && \
  cd build && \
  cmake -DCMAKE_CXX_STANDARD=17 -DSKIP_BUILD_TEST=ON .. && \
  make && \
  make install && \
  ldconfig && \
  cd ../.. && \
  rm -rf libpqxx

FROM build AS app

WORKDIR /server

# Copy source files
COPY . .

# Build the application
RUN rm -rf build && \
  mkdir build && \
  cd build && \
  cmake -DCMAKE_CXX_STANDARD=17 .. && \
  make

# Run the application
CMD ["./build/api_server"] 
