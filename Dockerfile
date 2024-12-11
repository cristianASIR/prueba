# Base Ubuntu Image
FROM ubuntu:20.04

# Actualizar paquetes e instalar dependencias
RUN apt-get update && apt-get install -y \
    nginx \
    openssh-server \
    sudo && \
    apt-get clean

# Crear directorios necesarios para SSH
RUN mkdir /var/run/sshd

# Copiar script de usuarios
COPY usuarios.sh /root/usuarios.sh
RUN chmod +x /root/usuarios.sh && /root/usuarios.sh

# Configurar SSH para aceptar conexiones
RUN echo 'PermitRootLogin yes' >> /etc/ssh/sshd_config
RUN echo 'PasswordAuthentication yes' >> /etc/ssh/sshd_config

# Exponer los puertos necesarios
EXPOSE 80 22

# Comando para iniciar Nginx y SSH
CMD service nginx start && /usr/sbin/sshd -D
