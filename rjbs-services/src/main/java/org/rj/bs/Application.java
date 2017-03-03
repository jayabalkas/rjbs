package org.rj.bs;

import org.rj.bs.config.RSApplicationInitializer;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;

@SpringBootApplication
public class Application extends SpringBootServletInitializer {

    public static void main(String[] args) {
    	 new SpringApplicationBuilder(Application.class).
         initializers(new RSApplicationInitializer())
         .application()
         .run(args);
    }
}

