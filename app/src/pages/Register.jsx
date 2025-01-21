const Register = () => {
    const [form, setForm] = useState({
        <div className="flex h-screen">
            <div className="flex-1">
                <img
                    src={imageSrc}
                    alt="Description"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex-1 flex items-center justify-center bg-primary p-8">
                <div className="w-full max-w-lg bg-primary rounded-lg p-8">
                    <h2 className="text-center font-semibold text-2xl text-secondary mb-6">
                        Crea il tuo Account
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label htmlFor="name" className="block text-sm font-medium text-secondary">
                                Nome
                            </label>
                            <input type="text" id="name" name="name" value={form.name} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="surname" className="block text-sm font-medium text-secondary">
                                Cognome
                            </label>
                            <input type="text" id="surname" name="surname" value={form.surname} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="block text-sm font-medium text-secondary">
                                Email
                            </label>
                            <input type="email" id="email" name="email" value={form.email} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block text-sm font-medium text-secondary">
                                Password
                            </label>
                            <input type="password" id="password" name="password" value={form.password} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-secondary">
                                Conferma Password
                            </label>
                            <input type="password" id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700">
                            Registrati
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};


                  src={imageSrc}
                  alt="Description"
                  className="w-full h-full object-cover"
              />
          </div>
          <div className="flex-1 flex items-center justify-center bg-primary p-8">
              <div className="w-full max-w-lg bg-primary rounded-lg p-8">
                  <h2 className="text-center font-semibold text-2xl text-secondary mb-6">
                      Crea il tuo Account
                  </h2>
                  <form onSubmit={handleSubmit}>
                      <div className="mb-5">
                          <label htmlFor="name" className="block text-sm font-medium text-secondary">
                              Nome
                          </label>
                          <input type="text" id="name" name="name" value={form.name} onInput={handleInput}className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="surname" className="block text-sm font-medium text-secondary">
                              Cognome
                          </label>
                          <input type="text" id="surname" name="surname" value={form.surname} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="email" className="block text-sm font-medium text-secondary">
                              Email
                          </label>
                          <input type="email" id="email" name="email" value={form.email} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="password" className="block text-sm font-medium text-secondary">
                              Password
                          </label>
                          <input type="password" id="password" name="password" value={form.password} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-secondary">
                              Conferma Password
                          </label>
                          <input type="password" id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700">
                          Registrati
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
};


                  src={imageSrc}
                  alt="Description"
                  className="w-full h-full object-cover"
              />
          </div>
          <div className="flex-1 flex items-center justify-center bg-primary p-8">
              <div className="w-full max-w-lg bg-primary rounded-lg p-8">
                  <h2 className="text-center font-semibold text-2xl text-secondary mb-6">
                      Crea il tuo Account
                  </h2>
                  <form onSubmit={handleSubmit}>
                      <div className="mb-5">
                          <label htmlFor="name" className="block text-sm font-medium text-secondary">
                              Nome
                          </label>
                          <input type="text" id="name" name="name" value={form.name} onInput={handleInput}className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="surname" className="block text-sm font-medium text-secondary">
                              Cognome
                          </label>
                          <input type="text" id="surname" name="surname" value={form.surname} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="email" className="block text-sm font-medium text-secondary">
                              Email
                          </label>
                          <input type="email" id="email" name="email" value={form.email} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="password" className="block text-sm font-medium text-secondary">
                              Password
                          </label>
                          <input type="password" id="password" name="password" value={form.password} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-secondary">
                              Conferma Password
                          </label>
                          <input type="password" id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700">
                          Registrati
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
};


                  src={imageSrc}
                  alt="Description"
                  className="w-full h-full object-cover"
              />
          </div>
          <div className="flex-1 flex items-center justify-center bg-primary p-8">
              <div className="w-full max-w-lg bg-primary rounded-lg p-8">
                  <h2 className="text-center font-semibold text-2xl text-secondary mb-6">
                      Crea il tuo Account
                  </h2>
                  <form onSubmit={handleSubmit}>
                      <div className="mb-5">
                          <label htmlFor="name" className="block text-sm font-medium text-secondary">
                              Nome
                          </label>
                          <input type="text" id="name" name="name" value={form.name} onInput={handleInput}className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="surname" className="block text-sm font-medium text-secondary">
                              Cognome
                          </label>
                          <input type="text" id="surname" name="surname" value={form.surname} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="email" className="block text-sm font-medium text-secondary">
                              Email
                          </label>
                          <input type="email" id="email" name="email" value={form.email} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="password" className="block text-sm font-medium text-secondary">
                              Password
                          </label>
                          <input type="password" id="password" name="password" value={form.password} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-secondary">
                              Conferma Password
                          </label>
                          <input type="password" id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700">
                          Registrati
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
};


                  src={imageSrc}
                  alt="Description"
                  className="w-full h-full object-cover"
              />
          </div>
          <div className="flex-1 flex items-center justify-center bg-primary p-8">
              <div className="w-full max-w-lg bg-primary rounded-lg p-8">
                  <h2 className="text-center font-semibold text-2xl text-secondary mb-6">
                      Crea il tuo Account
                  </h2>
                  <form onSubmit={handleSubmit}>
                      <div className="mb-5">
                          <label htmlFor="name" className="block text-sm font-medium text-secondary">
                              Nome
                          </label>
                          <input type="text" id="name" name="name" value={form.name} onInput={handleInput}className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="surname" className="block text-sm font-medium text-secondary">
                              Cognome
                          </label>
                          <input type="text" id="surname" name="surname" value={form.surname} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="email" className="block text-sm font-medium text-secondary">
                              Email
                          </label>
                          <input type="email" id="email" name="email" value={form.email} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="password" className="block text-sm font-medium text-secondary">
                              Password
                          </label>
                          <input type="password" id="password" name="password" value={form.password} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-secondary">
                              Conferma Password
                          </label>
                          <input type="password" id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700">
                          Registrati
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
};


                  src={imageSrc}
                  alt="Description"
                  className="w-full h-full object-cover"
              />
          </div>
          <div className="flex-1 flex items-center justify-center bg-primary p-8">
              <div className="w-full max-w-lg bg-primary rounded-lg p-8">
                  <h2 className="text-center font-semibold text-2xl text-secondary mb-6">
                      Crea il tuo Account
                  </h2>
                  <form onSubmit={handleSubmit}>
                      <div className="mb-5">
                          <label htmlFor="name" className="block text-sm font-medium text-secondary">
                              Nome
                          </label>
                          <input type="text" id="name" name="name" value={form.name} onInput={handleInput}className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="surname" className="block text-sm font-medium text-secondary">
                              Cognome
                          </label>
                          <input type="text" id="surname" name="surname" value={form.surname} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="email" className="block text-sm font-medium text-secondary">
                              Email
                          </label>
                          <input type="email" id="email" name="email" value={form.email} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="password" className="block text-sm font-medium text-secondary">
                              Password
                          </label>
                          <input type="password" id="password" name="password" value={form.password} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-secondary">
                              Conferma Password
                          </label>
                          <input type="password" id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700">
                          Registrati
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
};


                  src={imageSrc}
                  alt="Description"
                  className="w-full h-full object-cover"
              />
          </div>
          <div className="flex-1 flex items-center justify-center bg-primary p-8">
              <div className="w-full max-w-lg bg-primary rounded-lg p-8">
                  <h2 className="text-center font-semibold text-2xl text-secondary mb-6">
                      Crea il tuo Account
                  </h2>
                  <form onSubmit={handleSubmit}>
                      <div className="mb-5">
                          <label htmlFor="name" className="block text-sm font-medium text-secondary">
                              Nome
                          </label>
                          <input type="text" id="name" name="name" value={form.name} onInput={handleInput}className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="surname" className="block text-sm font-medium text-secondary">
                              Cognome
                          </label>
                          <input type="text" id="surname" name="surname" value={form.surname} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="email" className="block text-sm font-medium text-secondary">
                              Email
                          </label>
                          <input type="email" id="email" name="email" value={form.email} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="password" className="block text-sm font-medium text-secondary">
                              Password
                          </label>
                          <input type="password" id="password" name="password" value={form.password} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-secondary">
                              Conferma Password
                          </label>
                          <input type="password" id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700">
                          Registrati
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
};


                  src={imageSrc}
                  alt="Description"
                  className="w-full h-full object-cover"
              />
          </div>
          <div className="flex-1 flex items-center justify-center bg-primary p-8">
              <div className="w-full max-w-lg bg-primary rounded-lg p-8">
                  <h2 className="text-center font-semibold text-2xl text-secondary mb-6">
                      Crea il tuo Account
                  </h2>
                  <form onSubmit={handleSubmit}>
                      <div className="mb-5">
                          <label htmlFor="name" className="block text-sm font-medium text-secondary">
                              Nome
                          </label>
                          <input type="text" id="name" name="name" value={form.name} onInput={handleInput}className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="surname" className="block text-sm font-medium text-secondary">
                              Cognome
                          </label>
                          <input type="text" id="surname" name="surname" value={form.surname} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="email" className="block text-sm font-medium text-secondary">
                              Email
                          </label>
                          <input type="email" id="email" name="email" value={form.email} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="password" className="block text-sm font-medium text-secondary">
                              Password
                          </label>
                          <input type="password" id="password" name="password" value={form.password} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-secondary">
                              Conferma Password
                          </label>
                          <input type="password" id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700">
                          Registrati
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
};


                  src={imageSrc}
                  alt="Description"
                  className="w-full h-full object-cover"
              />
          </div>
          <div className="flex-1 flex items-center justify-center bg-primary p-8">
              <div className="w-full max-w-lg bg-primary rounded-lg p-8">
                  <h2 className="text-center font-semibold text-2xl text-secondary mb-6">
                      Crea il tuo Account
                  </h2>
                  <form onSubmit={handleSubmit}>
                      <div className="mb-5">
                          <label htmlFor="name" className="block text-sm font-medium text-secondary">
                              Nome
                          </label>
                          <input type="text" id="name" name="name" value={form.name} onInput={handleInput}className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="surname" className="block text-sm font-medium text-secondary">
                              Cognome
                          </label>
                          <input type="text" id="surname" name="surname" value={form.surname} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="email" className="block text-sm font-medium text-secondary">
                              Email
                          </label>
                          <input type="email" id="email" name="email" value={form.email} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="password" className="block text-sm font-medium text-secondary">
                              Password
                          </label>
                          <input type="password" id="password" name="password" value={form.password} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-secondary">
                              Conferma Password
                          </label>
                          <input type="password" id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700">
                          Registrati
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
};


                  src={imageSrc}
                  alt="Description"
                  className="w-full h-full object-cover"
              />
          </div>
          <div className="flex-1 flex items-center justify-center bg-primary p-8">
              <div className="w-full max-w-lg bg-primary rounded-lg p-8">
                  <h2 className="text-center font-semibold text-2xl text-secondary mb-6">
                      Crea il tuo Account
                  </h2>
                  <form onSubmit={handleSubmit}>
                      <div className="mb-5">
                          <label htmlFor="name" className="block text-sm font-medium text-secondary">
                              Nome
                          </label>
                          <input type="text" id="name" name="name" value={form.name} onInput={handleInput}className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="surname" className="block text-sm font-medium text-secondary">
                              Cognome
                      </div>
                      <div className="mb-5">
                          <label htmlFor="email" className="block text-sm font-medium text-secondary">
                              Email
                          </label>
                          <input type="email" id="email" name="email" value={form.email} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="password" className="block text-sm font-medium text-secondary">
                              Password
                          </label>
                          <input type="password" id="password" name="password" value={form.password} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-secondary">
                              Conferma Password
                          </label>
                          <input type="password" id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700">
                          Registrati
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
};


        password: "",
        confirmPassword:""
    })


    const handleInput = (event) => {
        const { name, value } = event.target;
        setForm((form) => ({
            ...form,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form)
        if (form.confirmPassword !== form.password) {
            alert("Le password devono essere uguali");
            return;
        }
        alert("Ti sei iscritto!")
    }

    return (
      <div className="flex h-screen">
          <div className="flex-1">
              <img
                  src={imageSrc}
                  alt="Description"
                  className="w-full h-full object-cover"
              />
          </div>
          <div className="flex-1 flex items-center justify-center bg-primary p-8">
              <div className="w-full max-w-lg bg-primary rounded-lg p-8">
                  <h2 className="text-center font-semibold text-2xl text-secondary mb-6">
                      Crea il tuo Account
                  </h2>
                  <form onSubmit={handleSubmit}>
                      <div className="mb-5">
                          <label htmlFor="name" className="block text-sm font-medium text-secondary">
                              Nome
                          </label>
                          <input type="text" id="name" name="name" value={form.name} onInput={handleInput}className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="surname" className="block text-sm font-medium text-secondary">
                              Cognome
                          </label>
                          <input type="text" id="surname" name="surname" value={form.surname} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="email" className="block text-sm font-medium text-secondary">
                              Email
                          </label>
                          <input type="email" id="email" name="email" value={form.email} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="password" className="block text-sm font-medium text-secondary">
                              Password
                          </label>
                          <input type="password" id="password" name="password" value={form.password} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-secondary">
                              Conferma Password
                          </label>
                          <input type="password" id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onInput={handleInput} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700">
                          Registrati
                      </button>
                  </form>
                <div>
                  <img src="" alt="" />
                </div>
            </div>
        </>
    )
}

export default Register