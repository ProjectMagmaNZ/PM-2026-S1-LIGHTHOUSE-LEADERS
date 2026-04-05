from db import Base, engine
from models import User

if __name__ == "__main__":
    Base.metadata.create_all(bind=engine)