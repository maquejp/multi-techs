# Use an official PHP image with FPM and CLI support
FROM php:8.2-fpm

# Set working directory
WORKDIR /var/www

# Install system dependencies (including Nginx)
RUN apt-get update && apt-get install -y \
    unzip \
    git \
    curl \
    libicu-dev \
    libzip-dev \
    zip \
    nginx \
    && docker-php-ext-install intl pdo pdo_mysql zip

# Install Composer globally
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install Symfony CLI
RUN curl -sS https://get.symfony.com/cli/installer | bash && \
    mv /root/.symfony/bin/symfony /usr/local/bin/symfony

# Set permissions
RUN chown -R www-data:www-data /var/www

# Configure Nginx
COPY ./default.conf /etc/nginx/sites-available/default

# Expose ports (Nginx will listen on port 80 and PHP on 9000)
EXPOSE 80
EXPOSE 9000

# Start Nginx and PHP-FPM
CMD service nginx start && php-fpm
