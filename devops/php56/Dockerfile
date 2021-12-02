FROM php:5.6-fpm

# Copy composer.lock and composer.json
# COPY composer.json composer.lock /var/www/

# Set working directory
WORKDIR /var/www

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    mysql-client \
    libpng-dev \
    libxml2-dev \
    libjpeg62-turbo-dev \
    libmcrypt-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install extensions
RUN echo "Installing PHP extensions" \
&& docker-php-ext-install iconv mcrypt gd pdo_mysql mysql json mysqli exif pcntl zip bcmath simplexml xmlrpc soap mbstring \
&& docker-php-ext-configure gd --with-jpeg-dir=/usr/include/ \
&& docker-php-ext-enable iconv mcrypt gd pdo_mysql mysql json mysqli exif pcntl zip bcmath simplexml xmlrpc soap mbstring

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]