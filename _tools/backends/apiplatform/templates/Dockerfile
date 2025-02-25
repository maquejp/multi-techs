# Use an official PHP image with FPM support
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
    supervisor \
    && docker-php-ext-install intl pdo pdo_mysql zip \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Composer globally
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install Symfony CLI
RUN curl -sS https://get.symfony.com/cli/installer | bash && \
    mv $(find /root -type f -name symfony) /usr/local/bin/symfony

# Copy Nginx configuration
COPY default.conf /etc/nginx/sites-available/default
RUN rm -f /etc/nginx/sites-enabled/default && \
    ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default

# Copy Supervisord configuration
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Expose ports (Nginx on 80, PHP-FPM on 9000)
EXPOSE 80 9000

# Start Supervisord to manage processes
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
